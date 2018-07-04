var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

import moment from 'moment';


//#######################
// GET ALL listings ===================
//#######################

router.get('/alllistings', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    List.find().
    exec(function (e, docs) {
        docs.map(function(listing){
            Venue
            .findOne({name: listing.venue})
            .exec(function (e, venue) {
                if (venue){
                    console.log('Found!');
                    listing.venue = venue._id;
                    List.update({
                        _id: listing._id
                    }, {
                        $set: listing
                    }, function (err, newlisting) {
                        console.log(err);
                    });
                }
            });
        });
        res.json(docs);
    });
});


//#######################
// GET currentlist to display.
//#######################

router.get('/currentlistings/:offset_ratio', function (req, res) {
    var List = req.list;

    //Find today's date
    var start = moment().startOf('day');
    var end = moment().endOf('day');
    
    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 500; 

    List.find().
    where('start').lte(end).
    where('end').gte(start).
	where('event').ne(true).
	where('venue').ne('').
    skip(offset_ratio).
    limit(500).
    sort({neighborhood: 1, venue: 1}).
    populate('venue').
    populate('artists').
    populate('relatedEvents').
    exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// GET future list to display.
//#######################

router.get('/futurelistings/:offset_ratio', function (req, res) {
    var List = req.list;

    //Find today's date
    var today = moment().endOf('day');
    
    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 100; 

    List.find().
    where('start').gt(today).
    where('event').ne(true).
	where('venue').ne('').
    sort('neighborhood').
    skip(offset_ratio).
    limit(100).
    populate('venue').
    populate('artists').
    populate('relatedEvents').
    exec(function (e, docs) {
        res.json(docs);
    });
});


//#######################
// GET GLANCE list to display.
//#######################

router.get('/glancelistings', function (req, res) {
    var List = req.list;
    var Event = req.event;

    //Find today's date
    var today = moment().startOf('day')
    var inaWeek = moment().add(7, 'days').endOf('day');

    List.find({
        $or: [{
            start: {
                $gte: today,
                $lte: inaWeek
            }
        }, {
            end: {
                $gte: today,
                $lte: inaWeek
            }
        }]
    }, {})
    .where('venue').type('string')
    .where('event').ne(true)
    .sort('neighborhood')
    .populate('venue')
    .populate('artists')
    .populate('relatedEvents')
    .exec(function (e, listings) {
        if (e)
            {console.log('Error: ', e)
            res.send(e);}
        else 
            Event.find({date: { $gte: today, $lte: inaWeek}}, {})
            .populate('venue')
            .populate('list')
            .populate('artists')
            .exec(function (e, events) {
                var docs = {listings: listings, events: events}
                res.json(docs);
            })
    });
});


//#######################
// GET LATEST LISTINGS to review
//#######################

router.get('/latestlistings', function (req, res) {
    var List = req.list;

    List.find().
    where('venue').ne('').
    where('updated_at').ne('').
    sort({updated_at: -1}).
    limit(20).
    populate('venue').
    populate('artists').
    populate('relatedEvents').
    exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
/* FIND listings based on text */
//#######################

router.get('/find/:regex_input', function (req, res, next) {
    var List = req.list;

    var regexp = new RegExp(req.params.regex_input, "i");
    
    List
    .find({name: regexp})
    .populate('artists')
    .exec(function (err, listings) {
    if (err)
        res.send(err);
        
    var results = [];
    listings.map(function (thelisting) {
        var artists = thelisting.artists ? thelisting.artists.map((artist, index) => { var comma = index < (thelisting.artists.length - 1) ? ', ' : ''; return artist.name + comma}) : ''
        var colon = thelisting.artists.length && thelisting.name ? ': ' : ''
        var groupShow = thelisting.artists && thelisting.artists.length > 3 ? "Group Show" : ''
        results.push({
            value: thelisting._id,
            label: artists + groupShow + colon + thelisting.name
        });
    })

    res.json(results);
    });

});

//#######################
// GET ONE listing 
//#######################
router.get('/getinfo/:listing_id', function (req, res, next) {
    var List = req.list;

    List.findOne({
        _id: req.params.listing_id
    }).
	where('venue').ne('').
    populate('venue').
    populate('artists').
    populate('relatedEvents').
    populate('updated_by').
    exec(function (e, docs) {
        if (e)
            res.send(e);
        res.json(docs);
    });

});


//############################
// POST a new listing.
//############################

router.post('/add', function (req, res) {
    var List = req.list;
    var Artists = req.artists;
    var Event = req.event

    // define a new entry
    var newlisting = req.body;

    // Save when and who created it
	var now = new moment();
	newlisting.created_at = now;
	newlisting.updated_at = now;
    newlisting.updated_by = req.user._id;
    
    //SAVE ALL THE ARTISTS
    var artistsfn = function saveArtists(artist){ // Save artist async
        if (artist._id){
            return artist._id
        } else {
            var newArtist = new Artists(artist);
            return new Promise(resolve => {
                newArtist.save(function (err, newArtist) { 
                    resolve(newArtist._id)
                })
            })
        }
    };

    var saving = newlisting.artists.map(artistsfn); // run the function over all items

    var savedArtists = Promise.all(saving); // pass array of promises

    savedArtists.then(data => {

        newlisting.artists = data;

        //SAVE ALL THE EVENTS
        var eventsfn = function saveEvents(event){ // Save artist async

                var newEvent = event
                newEvent.venue = newlisting.venue._id
                newEvent.list = newlisting._id
                newEvent.artists = newlisting.artists
                var readyEvent = new Event(newEvent)

                return new Promise(resolve => {
                    readyEvent.save(function (err, savedEvent) { 
                        resolve(savedEvent._id)
                    })
                })
        };
    
        var savingEvents = newlisting.relatedEvents.map(eventsfn); // run the function over all items
    
        var savedEvents = Promise.all(savingEvents); // pass array of promises
    
        savedEvents.then(data => {

            newlisting.relatedEvents = data;
            newlisting = new List(newlisting);

            //Save this new entry
            newlisting.save(function (err, newlisting) {
                res.send(
                    err === null ? newlisting : { msg: err }
                );
            });
        });
    });

});


//#######################
// UPDATE a listing.
//#######################

router.post('/update', function (req, res) {
    var List = req.list;
    var Artists = req.artists;
    var Event = req.event;

    // define a new entry
    var thelisting = req.body;

    // Save when and who updated it
	var now = moment();
	thelisting.updated_at = now;
    thelisting.updated_by = req.user._id;

    //SAVE ALL THE ARTISTS
    var artistsfn = function saveArtists(artist){ // Save artist async
        if (artist._id){
            return artist._id
        } else {
            var newArtist = new Artists(artist);
            return new Promise(resolve => {
                newArtist.save(function (err, newArtist) { 
                    resolve(newArtist._id)
                })
            })
        }
    };

    var saving = thelisting.artists.map(artistsfn); // run the function over all items

    var savedArtists = Promise.all(saving); // pass array of promises

    savedArtists.then(data => {

        thelisting.artists = data;

        //SAVE ALL THE EVENTS
        var eventsfn = function saveEvents(event){ // Save artist async
            if (event._id){

                let newEvent = event
                newEvent.venue = thelisting.venue._id
                newEvent.list = thelisting._id
                newEvent.artists = thelisting.artists

                return new Promise(resolve => {
                    Event.update({
                        _id: event._id
                        }, {
                            $set: newEvent
                        }, function (err, savedEvent) {
                            console.log(savedEvent)
                            resolve(savedEvent._id)
                    });
                })

            } else {
                let newEvent = event
                newEvent.venue = thelisting.venue._id
                newEvent.list = thelisting._id
                newEvent.artists = thelisting.artists
                let readyEvent = new Event(newEvent)

                return new Promise(resolve => {
                    readyEvent.save(function (err, savedEvent) { 
                        console.log(savedEvent)
                        resolve(savedEvent._id)
                    })
                })
            }
        };
    
        var savingEvents = thelisting.relatedEvents.map(eventsfn); // run the function over all items
    
        var savedEvents = Promise.all(savingEvents); // pass array of promises
    
        savedEvents.then(data => {

            thelisting.relatedEvents = data;
            thelisting = new List(thelisting);

            List.update({
                _id: thelisting._id
                }, {
                    $set: thelisting
                }, function (err, newlisting) {
                    console.log(newlisting)
                    res.send(
                        (err === null) ? {
                            msg: ''
                        } : {
                            msg: err
                        }
                    );
            });

        })

    });

});


//#######################
// UPDATE a featured article
//#######################

router.post('/feature', function (req, res) {
    var Feature = req.feature;

    if (req.body._id) {

        //Update feature

        var theFeature = new Feature(req.body);

        Feature.update({
            _id: theFeature._id
        }, {
            $set: theFeature
        }, function (err, newFeature) {
            res.send((err === null) ? { msg: '' } : { msg: err });
        });


    } else {
        // New feature

        var theFeature = new Feature(req.body);

        //Save this new entry
        theFeature.save(function (err, newFeature) {
            res.send((err === null) ? { data: newFeature } : { msg: err });
        });
    }

});

//#######################
// FIND a featured article
//#######################

router.post('/findfeatures', function (req, res) {
    var Feature = req.feature;

    console.log("Find all features");

    Feature.find()
    .populate('list')
    .populate('venue')
    .exec(function (e, docs) {
        console.log('Found', e)
        res.json(docs)
    });

});


//#######################
// DELETE a listing.
//#######################

router.post('/delete/:listing_id', function (req, res) {
    var List = req.list;
    var Trash = req.trash;

    console.log("Deleting one listing", req.params.listing_id);

    var listingToDelete = req.params.listing_id;

    List.findOne({ _id: listingToDelete }, function(err, result) {

        let swap = new Trash(result);
        swap._id = mongoose.Types.ObjectId()
        swap.isNew = true
    
        swap.save(function (err, newlisting) {
            res.send(
                (err === null) ? {
                    data: newlisting
                } : {
                    msg: err
                }
            );
        });

        result.remove();
    
    })

});



module.exports = router;