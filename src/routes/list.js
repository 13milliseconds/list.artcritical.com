var express = require('express');
var router = express.Router();

/*
 * GET currentlist to display.
 */
router.get('/currentlistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;
    
    //Find today's date
    var today = new Date();
    today.setHours(0,0,0,0);
    
    console.log('Searching for current events...');
    
    List.find({start: {$lt: today}, end: {$gt: today}}, {}).
    sort('neighborhood').
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });
});

/*
 * GET GLANCE list to display.
 */
router.get('/glancelistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;
    
    //Find today's date
    var today = new Date();
    today.setHours(0,0,0,0);
    var inaWeek = new Date();
    inaWeek.setDate(inaWeek.getDate() + 7);
    inaWeek.setHours(0,0,0,0);
    
    console.log('Searching for this weeks events...');
    
    List.find({$or: [ {start: {$gte: today, $lt: inaWeek}}, {end: {$gte: today, $lt: inaWeek}}]}, {}).
    sort('neighborhood').
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });
});


/*
 * GET EVENTS list to display.
 */
router.get('/eventslistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;
    
    //Find today's date
    var today = new Date();
    today.setHours(0,0,0,0);
    
    console.log('Searching for the next events...');
    
    List.find({$and: [{start: {$gte: today}}, {event: true}]}, {}).
    sort('start').
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });
});


/*
 * GET ALL listings ===================
 */
router.get('/alllistings', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    List.find().
    sort('neighborhood').
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });
});



/* GET ONE venue */
router.get('/find/:listing_id', function (req, res, next) {
    var List = req.list;
    
    
    var regexp = new RegExp("^"+ req.params.listing_id, "i");
    List.find({ name: regexp}, function(err, listing) {
            if (err)
                res.send(err);
            var results = [];
            listing.map(function (thelisting) {
                results.push({
                    value: thelisting._id,
                    label: thelisting.name
                });    
            })
        
            res.json(results);
        });

});

/*
 * POST a new venue.
 */
router.post('/add', function (req, res) {
    var List = req.list;


    // define a new entry
    var newlisting = new List(req.body);


    //newvenue.markModified('coordinates');

    //Save this new entry
    newlisting.save(function (err, newlisting) {
        res.send(
            (err === null) ? {
                msg: ''
            } : {
                msg: err
            }
        );
    });

});



module.exports = router;
