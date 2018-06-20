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
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    
    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 500; 

    List.find().
    where('start').lte(today).
    where('end').gte(today).
	where('event').ne(true).
	where('venue').ne('').
    skip(offset_ratio).
    limit(500).
    sort({neighborhood: 1, venue: 1}).
    populate('venue').
    populate('artists').
    populate('updated_by').
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
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    
    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 100; 

    List.find().
    where('start').gte(today).
    where('event').ne(true).
	where('venue').ne('').
    sort('neighborhood').
    skip(offset_ratio).
    limit(100).
    populate('venue').
    populate('artists').
    populate('updated_by').
    exec(function (e, docs) {
        res.json(docs);
    });
});


//#######################
// GET GLANCE list to display.
//#######################

router.get('/glancelistings', function (req, res) {
    var List = req.list;

    //Find today's date
    var today = moment()
    var inaWeek = moment().add(7, 'days');

    List.find({
        $or: [{
            start: {
                $gte: today,
                $lt: inaWeek
            }
        }, {
            end: {
                $gte: today,
                $lt: inaWeek
            }
        }]
    }, {})
    .where('venue').ne('')
    .sort('neighborhood')
    .populate('venue')
    .populate('artists')
    .exec(function (e, docs) {
        if (e)
            {console.log('Error: ', e)
            res.send(e);}
        else 
            res.json(docs);
    });
});


//#######################
// GET EVENTS list to display.
//#######################

router.get('/eventslistings', function (req, res) {
    var List = req.list;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    List.find().
	where('start').gte(today).
    where('event').equals(true).
	where('venue').ne('').
    sort('start').
    populate('venue').
    populate('artists').
    exec(function (e, docs) {
        res.json(docs);
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
        console.log(thelisting.artists)
        var artists = thelisting.artists && thelisting.artists.map(artist => {return artist.name + ' '})
        results.push({
            value: thelisting._id,
            label: thelisting.name + ' ' + artists
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

    // define a new entry
    var newlisting = req.body;

    // Save when and who created it
	var now = new Date();
	newlisting.created_at = now;
	newlisting.updated_at = now;
    newlisting.updated_by = req.user._id;
    
    var fn = function saveArtists(artist){ // Save artist async
        if (artist._id){
            return artist._id
        } else {
            var newArtist = new Artists(artist);
            return new Promise(resolve => {
                newArtist.save(function (err, newArtist) { 
                    console.log(newArtist)
                    resolve(newArtist._id)
                })
            })
        }
    };

    var saving = newlisting.artists.map(fn); // run the function over all items

    var savedArtists = Promise.all(saving); // pass array of promises

    savedArtists.then(data => {
        
        newlisting.artists = data;
        newlisting = new List(newlisting);

        console.log(newlisting)

        //Save this new entry
        newlisting.save(function (err, newlisting) {
            res.send(
                (err === null) ? { data: newlisting } : { msg: err }
            );
        });
    });

});


//#######################
// UPDATE a listing.
//#######################

router.post('/update', function (req, res) {
    var List = req.list;
    var Artists = req.artists;

    console.log("Update one listing");

    // define a new entry
    var thelisting = req.body;

    // Save when and who updated it
	var now = new Date();
	thelisting.updated_at = now;
    thelisting.updated_by = req.user._id;


    var fn = function saveArtists(artist){ // Save artist async
        if (artist._id){
            return artist._id
        } else {
            var newArtist = new Artists(artist);
            return new Promise(resolve => {
                newArtist.save(function (err, newArtist) { 
                    console.log(newArtist)
                    resolve(newArtist._id)
                })
            })
        }
    };

    var saving = thelisting.artists.map(fn); // run the function over all items

    var savedArtists = Promise.all(saving); // pass array of promises

    savedArtists.then(data => {
        
        thelisting.artists = data;
        thelisting = new List(thelisting);
        console.log('Before saving: ', thelisting)

        List.update({
            _id: thelisting._id
            }, {
                $set: thelisting
            }, function (err, newlisting) {
                console.log('After saving: ', newlisting);
                res.send(
                    (err === null) ? {
                        msg: ''
                    } : {
                        msg: err
                    }
                );
        });
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