var express = require('express');
var router = express.Router();


//#######################
// GET ALL listings ===================
//#######################

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
    var offset_ratio = parseInt(req.params.offset_ratio) * 30;

    List.find().
    where('start').lte(today).
    where('end').gte(today).
    sort('neighborhood').
    skip(offset_ratio).
    limit(30).
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });
});


//#######################
// GET GLANCE list to display.
//#######################

router.get('/glancelistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var inaWeek = new Date();
    inaWeek.setDate(inaWeek.getDate() + 7);
    inaWeek.setHours(0, 0, 0, 0);

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
    }, {}).
    sort('neighborhood').
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });
});


//#######################
// GET EVENTS list to display.
//#######################

router.get('/eventslistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    List.find({
        $and: [{
            start: {
                $gte: today
            }
        }, {
            event: true
        }]
    }, {}).
    sort('start').
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });
});


//#######################
/* GET ONE listing */
//#######################

router.get('/find/:listing_id', function (req, res, next) {
    var List = req.list;

    var regexp = new RegExp("^" + req.params.listing_id, "i");
    List.find({
        name: regexp
    }, function (err, listing) {
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

//#######################
// GET ONE listing 
//#######################
router.get('/getinfo/:listing_id', function (req, res, next) {
    var List = req.list;

    List.findOne({
        _id: req.params.listing_id
    }).
    populate('venue').
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

    console.log("Adding one listing");

    // define a new entry
    console.log('Body: ', req.body);
    var newlisting = new List(req.body);

    //Save this new entry
    newlisting.save(function (err, newlisting) {
        res.send(
            (err === null) ? {
                data: newlisting
            } : {
                msg: err
            }
        );
    });

});


//#######################
// UPDATE a listing.
//#######################

router.post('/update', function (req, res) {
    var List = req.list;

    console.log("Update one listing");

    // define a new entry
    var thelisting = new List(req.body);


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

});


//#######################
// UPDATE a featured article
//#######################

router.post('/feature', function (req, res) {
    var Feature = req.feature;

    console.log("Update one feature");

    if (req.body._id) {

        //Update feature
        console.log('Update feature');

        var theFeature = new Feature(req.body);

        Feature.update({
            _id: theFeature._id
        }, {
            $set: theFeature
        }, function (err, newFeature) {
            console.log('Updated feature: ', newFeature)
            res.send((err === null) ? { msg: '' } : { msg: err });
        });


    } else {
        // New feature
        console.log('New feature');

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

router.post('/findfeature', function (req, res) {
    var Feature = req.feature;

    console.log("Find one feature");
    
    Feature.find({
        date: req.body.date
    }).
    populate('list').
    populate('venue').
    exec(function (e, docs) {
        res.json(docs);
    });

});


//#######################
// DELETE a listing.
//#######################

router.post('/delete/:listing_id', function (req, res) {
    var List = req.list;

    console.log("Deleting one listing", req.params.listing_id);

    var listingToDelete = req.params.listing_id;
    List.remove({
        '_id': listingToDelete
    }, function (err) {
        res.send((err === null) ? {
            msg: ''
        } : {
            msg: 'error: ' + err
        });
    });

});



module.exports = router;