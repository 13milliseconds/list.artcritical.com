var express = require('express');
var router = express.Router();
var Promise = require("bluebird");

/* GET All Venues */
router.get('/', function (req, res, next) {
    var Venue = req.venue;

    Venue.find().
    sort('name').
    exec(function (e, docs) {
        res.json(docs);
    });
});

/* GET info for one venue */
router.get('/getadmin/:offset_ratio', function (req, res, next) {
    var Venue = req.venue;
    var List = req.list;
    
    var offset_ratio = parseInt(req.params.offset_ratio) * 30;
    
    Venue.find().sort('neighborhood').skip(offset_ratio).limit(30).exec()
        .then(function(venues){
        return Promise.map(venues, function(venue) {
            // Promise.map awaits for returned promises as well.
            return List.find({ venue: venue._id}).
            exec().then(function (current) {
                let newvenue = {
                    _id: venue._id,
                    name: venue.name,
                    neighborhood: venue.neighborhood,
                    listings: current,   
                }
                return newvenue;
            });
            
        })  
    }).then(function(result) {
            res.json(result);
        });
});

/* GET  a set of venue */
router.get('/find/:venue_id', function (req, res, next) {
    var Venue = req.venue;
    
    console.log('Looking for venue ' + req.params.venue_id);
    
    var regexp = new RegExp("^"+ req.params.venue_id, "i");
    Venue.find({ name: regexp}, function(err, venue) {
            if (err)
                res.send(err);
            var venues = [];
            venue.map(function (thevenue) {
                venues.push({
                    value: thevenue._id,
                    label: thevenue.name
                });    
            })
        
            res.json(venues);
        });

});

/* GET info for one venue */
router.get('/getinfo/:venue_id', function (req, res, next) {
    var Venue = req.venue;
    var List = req.list;
    
    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    
    Venue.find({ _id: req.params.venue_id}, function(err, venue) {
            if (err)
                res.send(err);
        
            List.find({ venue: venue[0]._id}).
            where('start').lte(today).
            where('end').gte(today).
            exec(function (e, current) {
                
                List.find({ venue: venue[0]._id}).
                where('start').gte(today).
                limit(4).
                exec(function (e, upcoming) {
                    
                    List.find({ venue: venue[0]._id}).
                    where('end').lte(today).
                    sort('-end').
                    limit(4).
                    exec(function (e, past) {
                        var data = {
                            venue: venue[0],
                            currentListings: current,
                            upcomingListings: upcoming,
                            pastListings: past,
                        };
                        res.json(data);
                    });
                });
            });
        }); 
});

/* GET current listings for one venue */
router.get('/getlistings/:venue_id', function (req, res, next) {
    var List = req.list;
    
    List.find({ venue: req.params.venue_id}).
    exec(function (e, docs) {
        res.json(docs);
    });
});

/*
 * POST a new venue.
 */
router.post('/add', function (req, res) {
    var Venue = req.venue;

    // define a new entry
    var newvenue = new Venue(req.body);

    //Save this new entry
    newvenue.save(function (err, newvenue) {
        res.send(
            (err === null) ? {
                msg: ''
            } : {
                msg: err
            }
        );
    });

});


//########################
// UPDATE a new venue.
//########################

router.post('/update', function (req, res) {
    var Venue = req.venue;

    // define a new entry
    var thevenue = new Venue(req.body);

    Venue.update({
        _id: thevenue._id
    }, {
        $set: thevenue
    }, function (err, newvenue) {
        if (err)
            res.send(err);
        res.json(newvenue);
    });

});


//########################
/* GET info for one venue */
//########################

router.get('/:venue_id', function (req, res, next) {
    var Venue = req.venue;
    
    Venue.find({ _id: req.params.venue_id}, function(err, venue) {
            if (err)
                res.send(err);
        
            res.json(venue);
        }); 

});





module.exports = router;
