var express = require('express');
var router = express.Router();

/* GET All Venues */
router.get('/', function (req, res, next) {
    var Venue = req.venue;

    Venue.find().
    sort('name').
    exec(function (e, docs) {
        res.json(docs);
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
    
    
    Venue.find({ _id: req.params.venue_id}, function(err, venue) {
            if (err)
                res.send(err);
        
            res.json(venue);
        }); 

});

/*
 * POST a new venue.
 */
router.post('/add', function (req, res) {
    var Venue = req.venue;


    // define a new entry
    var newvenue = new Venue(req.body);


    //newvenue.markModified('coordinates');

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



module.exports = router;
