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
    var start = moment.utc().startOf('day');
    var end = moment.utc().endOf('day');
    
    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 1000; 

    List.find().
    where('start').lte(end).
    where('end').gte(start).
	where('event').ne(true).
	where('venue').ne('').
    skip(offset_ratio).
    limit(1000).
    sort({neighborhood: 1, venue: 1}).
    populate('venue').
    populate('artists').
    populate('relatedEvents').
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
    var Event = req.event;

    //Find today's date
    var today = moment().startOf('day')
    var inaWeek = moment().add(7, 'days').endOf('day');


    List.find({
            end: {
                $gte: today,
                $lte: inaWeek
            }
    }, {})
    .exists('venue')
    .where('event').ne(true)
    .sort('neighborhood')
    .populate('venue')
    .populate('artists')
    .populate('relatedEvents')
    .populate('updated_by')
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
// GET LATEST EVENTS to review
//#######################

router.get('/latestevents', function (req, res) {
    var Event = req.event;

    Event.find().
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
// GET LATEST VENUES to review
//#######################

router.get('/latestvenues', function (req, res) {
    var Venue = req.venue;

    Venue.find().
    where('updated_at').ne('').
    sort({updated_at: -1}).
    limit(20).
    exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
/* FIND listings based on text */
//#######################

router.get('/find/:regex_input', function (req, res, next) {
    var List = req.list;

    var regexp = new RegExp(req.params.regex_input, "gi");

    var results = [];
    
    List
    .find( {$or:[ {tags: regexp}, {name: regexp}]})
    .populate('artists') //get rid of this when all shows have titles
    .exec(function (err, listings) {
        if (err) res.send(err);

        listings.map(thelisting => {
            if (thelisting.title){
                results.push({
                    value: thelisting._id,
                    label: thelisting.title
                });
            } else { //get rid of this when all shows have titles
                var artists = thelisting.artists && thelisting.artists.length <= 3 ? thelisting.artists.map((artist, index) => { var comma = index < (thelisting.artists.length - 1) ? ', ' : ''; return artist.name + comma}) : ''
                var groupShow = thelisting.artists && thelisting.artists.length > 3 ? "Group Show" : ''
                var colon = thelisting.artists.length && thelisting.name ? ': ' : ''
                var dates = moment.utc(thelisting.start).format('MM/DD/YY') + '-' + moment.utc(thelisting.end).format('MM/DD/YY')
                results.push({
                    value: thelisting._id,
                    label: artists + groupShow + colon + thelisting.name,
                    dates
                });
            }
        })
            
        res.json(results);

    });

});

//#######################
/* FIND listings and Events based on text */
//#######################

router.get('/findall/:regex_input', function (req, res, next) {
    var List = req.list;
    var Event = req.event;

    var regexp = new RegExp(req.params.regex_input, "gi");

    var results = [];

    var today = moment().utcOffset(-4).startOf('day');
    
    List
    .find( {$or:[ {tags: regexp}, {name: regexp}]})
    .where('end').gte(today)
    .populate('artists') //get rid of this when all shows have titles
    .exec(function (err, listings) {
        if (err) res.send(err);

        listings.map(thelisting => {
            if (thelisting.title){
                results.push({
                    value: thelisting._id,
                    label: thelisting.title,
                    type: 'listing'
                });
            } else { //get rid of this when all shows have titles
                var artists = thelisting.artists && thelisting.artists.length <= 3 ? thelisting.artists.map((artist, index) => { var comma = index < (thelisting.artists.length - 1) ? ', ' : ''; return artist.name + comma}) : ''
                var groupShow = thelisting.artists && thelisting.artists.length > 3 ? "Group Show" : ''
                var colon = thelisting.artists.length && thelisting.name ? ': ' : ''
                results.push({
                    value: thelisting._id,
                    label: artists + groupShow + colon + thelisting.name
                });
            }
        })

        Event
        .find( {$or:[ {tags: regexp}, {name: regexp}]})
        .where('date').gte(today)
        .exec(function (err, events) {
            if (err) res.send(err);

            events.map(theevent => {
                    results.push({
                        value: theevent._id,
                        label: theevent.name,
                        type: 'event'
                    });
            })

            res.json(results);


        })
            

    });

});


//#######################
// CLEAN UP LISTINGS
//#######################
router.get('/cleanup', function (req, res, next) {
    var List = req.list;
    var Archive = req.archive;
    var Feature = req.feature;

    var twodaysago = moment().utcOffset(-4).subtract(2, 'days');

    List.find().
	where('end').lt(twodaysago).
    exec(function (e, docs) {
        if (e)  res.send(e);
        

        console.log('Found ' + docs.length + ' listings')

        docs.map(doc => {
            let swap = new Archive(doc);
            swap._id = mongoose.Types.ObjectId()
            swap.isNew = true

            Feature.findOne({list: doc._id}, function(err, feature){
                if (feature){
                    //Swap feature info
                    let featureSwap = feature
                    featureSwap.archive = swap._id
                    delete featureSwap.list

                    featureSwap.save((err) => {
                        if (err) 
                            console.log('Error saving feature: ', err)

                        // Move the listing to the archive
                        swap.save((err) => {
                            if (err) 
                                console.log('Error: ', err)            
                            doc.remove();
                        });
                    })
                } else {
                    // Move the listing to the archive
                    swap.save((err) => {
                        if (err) 
                            console.log('Error: ', err)
                        doc.remove();
                    });
                }
            })
        });

        res.json(docs);
    });

});


//#######################
// GET ONE listing 
//#######################
router.get('/getinfo/:listing_id', function (req, res, next) {
    var List = req.list;
    var Event = req.event;

    List.findOne({
        _id: req.params.listing_id
    }).
	where('venue').ne('').
    populate('venue').
    populate('artists').
    populate('relatedEvents').
    populate('updated_by').
    populate('created_by').
    exec(function (e, listing) {
        if (e)
            res.send(e);
        Event.find({ list: listing._id }).
        exec(function (e, docs) {
            var fullListing = listing
            fullListing.relatedEvents = docs
            res.json(fullListing);
        });
        //res.json(docs);
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
	var now = new moment().utcOffset(-4);
	newlisting.created_at = now;
	newlisting.updated_at = now;
    newlisting.updated_by = req.user._id;

    //Create the full show title
    let artistBlock = ''
    if (newlisting.artists){
        var i
        for (i = 0; i < newlisting.artists.length; i++) {
            var comma = i < (newlisting.artists.length - 1) ? ', ' : ''
            artistBlock = artistBlock + newlisting.artists[i].name + comma
        }
    }
    let firstPart = newlisting.artists
                        && (newlisting.artists.length > 3 && newlisting.name)
                            ? 'Group Show' 
                            : artistBlock
    let colon =  newlisting.artists && newlisting.artists.length > 0 && newlisting.name ? ': ' : ''
    newlisting.title = firstPart + colon + newlisting.name
    newlisting.tags = artistBlock +  ' ' + newlisting.name
    
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
                        resolve(savedEvent)
                    })
                })
        };
    
        var savingEvents = newlisting.relatedEvents.map(eventsfn); // run the function over all items
    
        var savedEvents = Promise.all(savingEvents); // pass array of promises
    
        savedEvents.then(data => {

            newlisting.relatedEvents = data;
            newlisting = new List(newlisting);

            //Save the events again now that we have an id
            newlisting.relatedEvents.map(event => {
                Event.update({ _id: event._id}, { $set: { list: newlisting._id }}, function(err, updatedEvent){
                    console.log('event updated')
                });
            })

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
    console.log('The listing: ', thelisting)

    // Save when and who updated it
	var now = moment().utcOffset(-4);
	thelisting.updated_at = now;
    thelisting.updated_by = req.user._id;

    //Create the full show title
    let artistBlock = ''
    if (thelisting.artists){
        var i
        for (i =0; i < thelisting.artists.length; i++) {
            var comma = i < (thelisting.artists.length - 1) ? ', ' : ''
            artistBlock = artistBlock + thelisting.artists[i].name + comma
        }
    }
    let firstPart = thelisting.artists 
                        && (thelisting.artists.length > 3 && thelisting.name)
                            ? 'Group Show' 
                            : artistBlock
    let colon =  thelisting.artists && thelisting.artists.length > 0 && thelisting.name ? ': ' : ''
    thelisting.title = firstPart + colon + thelisting.name
    thelisting.tags = artistBlock +  ' ' + thelisting.name

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

        console.log('artists saved')

        thelisting.artists = data;

        //SAVE ALL THE EVENTS
        var eventsfn = function saveEvents(event){ // Save artist async
            if (event._id){
                console.log('update an event')

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

                console.log('save a new event')

                let newEvent = event
                newEvent.venue = thelisting.venue._id
                newEvent.list = thelisting._id
                newEvent.artists = thelisting.artists
                let readyEvent = new Event(newEvent)

                return new Promise(resolve => {
                    readyEvent.save(function (err, savedEvent) {
                        resolve(savedEvent._id)
                    })
                })
            }
        };
    
        var savingEvents = thelisting.relatedEvents.map(eventsfn); // run the function over all items
    
        var savedEvents = Promise.all(savingEvents); // pass array of promises
    
        savedEvents.then(data => {

            console.log('events saved')

            thelisting.relatedEvents = data;
            thelisting = new List(thelisting);

            console.log('The final listing: ', thelisting)

            List.update({
                _id: thelisting._id
                }, {
                    $set: thelisting
                }, function (err) {
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
    var List = req.list;
    var Event = req.event;

    if (req.body._id) {

        console.log('Updating feature')

        //Update feature

        var theFeature = new Feature(req.body);
        

        Feature.update({
            _id: theFeature._id
        }, {
            $set: theFeature
        }, function (error, newFeature) {
            if (!error){

                if (req.body.type === 'event'){
                    //Save the associated event
                    const event = req.body.event
                    Event.update({_id: event._id}, { $set: event}, function(err){
                        res.send((err === null) ? req.body : { msg: err });
                    })
                } else {
                    //Save the associated listing
                    const listing = req.body.list
                    List.update({_id: listing._id}, { $set: listing}, function(err){
                        res.send((err === null) ? req.body : { msg: err });
                    })
                }
            }
        });


    } else {

        console.log('Create new feature', req.body)

        // New feature
        var theFeature = new Feature(req.body);

        //Save this new entry
        theFeature.save(function (error, newFeature) {
            var savedFeature = req.body
            savedFeature._id = newFeature._id

            if (!error){

                if (req.body.type === 'event'){
                    //Save the associated event
                    const event = req.body.event
                    Event.update({_id: event._id}, { $set: event}, function(err){
                        res.send((err === null) ? savedFeature : { msg: err })
                    })
                } else {
                    //Save the associated listing
                    const listing = req.body.list
                    List.update({_id: listing._id}, { $set: listing}, function(err){
                        res.send((err === null) ? savedFeature : { msg: err })
                    })
                }
            }
        });
    }

});

//#######################
// FIND all featured articles
//#######################

router.post('/findfeatures', function (req, res) {
    var Feature = req.feature;
    var List = req.list

    console.log("Find all features");

    Feature.find()
    .sort({archive: 1, date: -1})
    .populate('list')
    .populate('event')
    .populate('venue')
    .populate('archive')
    .populate('relatedEvent')
    .exec(function (e, docs) {

        //NEED TO USE PROMISES

        var populatefn = function saveArtists(feature){ // Save artist async
            return new Promise(resolve => {
                List.populate(feature.list, {path: 'relatedEvents'}, function (err, doc) {
                    var newfeature = feature
                    newfeature.list = doc
                    resolve(newfeature)
                })
            })
        }
    
        var population = docs.map(populatefn); // run the function over all items
    
        var populatedEvents = Promise.all(population); // pass array of promises
    
        populatedEvents.then(data => {
            res.json(data)
        })

    });

});

//#######################
// FIND the current featured articles
//#######################

router.post('/findcurrentfeatures', function (req, res) {
    var Feature = req.feature;
    var List = req.list;

    console.log("Find all current features");

    Feature.find()
    .populate('list')
    .populate('event')
    .populate('venue')
    .populate('relatedEvent')
    .exec(function (e, docs) {
        let now = moment().utcOffset(-4)

        let newFeatures = docs.filter(doc => {
            return doc.list
                ? moment(doc.list.end).utcOffset(-4).isSameOrAfter(now, 'day')
                : doc.event
                    ? moment(doc.event.date).utcOffset(-4).isSameOrAfter(now, 'day')
                    : false
        })

        //NEED TO USE PROMISES

        var populatefn = function saveArtists(feature){ // Save artist async
            return new Promise((resolve) => {
                feature.list 
                    ? List.populate(feature.list, {path: 'relatedEvents'}, function (err, doc) {
                        var newfeature = feature
                        newfeature.list = doc
                        resolve(newfeature)
                    })
                    : feature.event && resolve(feature)
            })
        }
    
        var population = newFeatures.map(populatefn); // run the function over all items
    
        var populatedEvents = Promise.all(population); // pass array of promises
    
        populatedEvents
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })

    });

});

//#######################
// FIND the featured by date
//#######################

router.post('/findfeaturesbydate/:date', function (req, res) {
    var Feature = req.feature;

    let start = moment.utc(req.params.date, 'MMDDYY').startOf('day')
    let end = moment.utc(req.params.date, 'MMDDYY').endOf('day')

    Feature.findOne({
        date: {"$gt":start, "$lt":end}
    })
    .populate('list')
    .populate('event') 
    .populate('archive')
    .populate('venue')
    .populate('relatedEvent')
    .exec(function (e, docs) {
        
        if (!e) res.json(docs)
    });

});



//#######################
// DELETE a Featured article
//#######################

router.post('/deletefeature/:feature_id', function (req, res) {
    var Feature = req.feature;

    console.log("Deleting one listing", req.params.feature_id);

    var toDelete = req.params.feature_id;

    Feature.deleteOne({ _id: toDelete }, function(err) {
        console.log
        res.send((err === null) ? {msg: ''} : { msg: err });
    })

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