var express = require('express');
var router = express.Router();


/*
 * GET ALL listings ===================
 */
router.get('/alllistings', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    console.log("Getting all listings");
    
    List.find().
    sort('neighborhood').
    limit(50).
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });
});

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
    
    List.find({start: {$lt: today}}).
    limit(50).
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






/* GET ONE venue */
router.get('/find/:listing_id', function (req, res, next) {
    var List = req.list;
    
    console.log("Getting one listing");
    
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
 * POST a new listing.
 */
router.post('/add', function (req, res) {
    var List = req.list;

    console.log("Adding one listing");
    
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

/*
 * UPDATE a listing.
 */
router.post('/update', function (req, res) {
    var List = req.list;

    console.log("Update one listing");
    
    // define a new entry
    var thelisting = new List(req.body);

    
    List.update({ _id: thelisting._id }, { $set: thelisting}, function (err, newlisting) {
        console.log(newlisting)
        res.send(
            (err === null) ? {
                msg: ''
            } : {
                msg: err
            }
        );
    });
    
});

/*
 * DELETE a listing.
 */
router.post('/delete/:listing_id', function (req, res) {
    var List = req.list;

    console.log("Getting one listing");
    
    var listingToDelete = req.params.listing_id;
    List.remove({ '_id' : listingToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
    
});



module.exports = router;
