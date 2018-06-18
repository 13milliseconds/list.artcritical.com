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
router.get('/getadmin/:neighborhood', function (req, res, next) {
    var Venue = req.venue;
    var List = req.list;
    
    Venue.find({ neighborhood: req.params.neighborhood})
		.sort('name')
		.exec()
        .then(function(venues){
        return Promise.map(venues, function(venue) {
            // Promise.map awaits for returned promises as well.
            return List.find({ venue: venue._id})
				.exec()
				.then(function (current) {
					let newvenue = {};
					newvenue = venue.toObject();
                    newvenue['listings']= current;
                return newvenue;
            });
            
        })  
    }).then(function(result) {
			console.log('Result');
            res.json(result);
        });
});


/////////////////////////////
/*  GET  a set of venues  */
////////////////////////////

router.get('/find/:venue_id', function (req, res, next) {
    var Venue = req.venue;
    
    var regexp = new RegExp(req.params.venue_id, "i");
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

//#######################
// GET ONE venue simple info 
//#######################
router.get('/getinfo/:venue_id', function (req, res, next) {
    var Venue = req.venue;
	
    Venue
		.findOne({_id: req.params.venue_id})
		.populate('updated_by')
    	.exec(function (e, docs) {
            console.log(docs);
        	if (e)
            	res.send(e);

			res.json(docs);
		});
});


//#######################
/* GET the full info for one venue */
//#######################

router.get('/getfullinfo/:venue_slug', function (req, res, next) {
    var Venue = req.venue;
    var List = req.list;
    
    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);
	
    Venue.findOne({ slug: req.params.venue_slug}, function(err, venue) {
            if (err)
                res.send(err);
		
        	if (venue){
				List.find({ venue: venue._id}).
				where('start').lte(today).
				where('end').gte(today).
				populate('venue').
				exec(function (e, current) {

					List.find({ venue: venue._id}).
					where('start').gte(today).
					limit(4).
					populate('venue').
					exec(function (e, upcoming) {

						List.find({ venue: venue._id}).
						where('end').lte(today).
						sort('-end').
						limit(4).
						populate('venue').
						exec(function (e, past) {
							var data = {
								venue: venue,
								currentListings: current,
								upcomingListings: upcoming,
								pastListings: past,
							};
							res.json(data);
						});
					});
				});	
			} else {
				res.send('No such venue');
			}
            
        }); 
});


//#######################
/* GET current listings for one venue */
//#######################

router.get('/getlistings/:venue_id', function (req, res, next) {
    var List = req.list;
    
    List.find({ venue: req.params.venue_id}).
    exec(function (e, docs) {
        res.json(docs);
    });
});


/*//#######################
 * POST a new venue.
 *///#######################

router.post('/add', function (req, res) {
    var Venue = req.venue;

    // Define a new entry
    var newvenue = new Venue(req.body);
	
	// Save when and who created it
	var now = new Date();
	newvenue.created_at = now;
	newvenue.updated_at = now;
	newvenue.updated_by = req.user._id;

    // Save this new entry
    newvenue.save(function (err, newvenue) {
        res.json(newvenue);
    });

});

//#######################
// DELETE a venue.
//#######################

router.post('/delete/:venue_id', function (req, res) {
    var Venue = req.venue;

    console.log("Deleting one venue", req.params.venue_id);

    var venueToDelete = req.params.venue_id;
	console.log(venueToDelete);
	
    Venue.remove({
        '_id': venueToDelete
    }, function (err) {
        res.send((err !== null) && {
            msg: 'error: ' + err
        });
    });

});


//########################
// UPDATE a new venue.
//########################

router.post('/update', function (req, res) {
    var Venue = req.venue;

    // define a new entry
    var thevenue = new Venue(req.body);
	
	// Save when and who created it
	var now = new Date();
	thevenue.updated_at = now;
	thevenue.updated_by = req.user._id;

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
