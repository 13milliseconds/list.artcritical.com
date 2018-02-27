var express = require('express');
var router = express.Router();
var passport = require('passport');


//###################################
// SIGNUP
//###################################

router.post('/signup', async(req, res) => {
    passport.authenticate('local-signup')(req, res, () => {
        // If logged in, we should have user info to send back
        if (req.user) {
            passport.authenticate('local-login')(req, res, () => {
				console.log('Logged in.');
				// If logged in, we should have user info to send back

				if (req.user) {
					return res.send(JSON.stringify(req.user));
				}

				// Otherwise return an error
				return res.send(JSON.stringify({
					error: 'There was an error logging in'
				}));
			});
        } else {
            // Otherwise return an error
            return res.send(JSON.stringify({
                error: 'There was an error logging in'
            }));
        }

    });
});

//###################################
// LOGIN
//###################################

router.post('/login', async(req, res) => {
	passport.authenticate('local-login')(req, res, () => {
		var Userlist = req.userlist;
        // If logged in, we should have user info to send back
        if (req.user) {
			
			console.log('Logged in');
			
			var now = new Date();
			var newInfo = {lastConnection: now};
			var update = { $set: newInfo};

			console.log(req.user);

			Userlist.update({ _id: req.user._id }, update, {upsert:true}, function (err, updatedUser) {
				console.log(updatedUser);
				return res.send(
					(err === null) ? 
						JSON.stringify(req.user)
					 : {
						error: err
					}
				);
			});
			
            //return res.send(JSON.stringify(req.user));
        } else {

			// Otherwise return an error
			return res.send(JSON.stringify({
				error: 'There was an error logging in'
			}));
		}
    });
});

//###################################
// FACEBOOK LOGIN
//###################################

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', function(req, res){
    
    console.log("In route: ", req.body);
           
    passport.authenticate('facebook', {failureRedirect: '/login'}, 
                          
        function (err, user, info) {
        if (err) {
            return err;
        }
        // Successful authentication, redirect home.
        if (!user) {
            var message = "Invalid credentials";
            // response.redirect('/login');
            return res.render('login', {
                message: info.message,
                userLoggedIn: null
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return err;
            }
            req.session.user = user;
            res.redirect('/');
        });
    })(req, res)
});



//###################################
// LOGOUT
//###################################

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy(function (err) {
        return res.send(JSON.stringify(req.user));
    });

});


/*//###################################
 * UPDATE the user's list
 *///###################################

router.post('/addtolist', function (req, res) {
    var Userlist = req.userlist;
    var List = req.list;
	
    //CHECK IF USER IS CONNECTED
    if (req.user) {

        // define variables
        var userID = req.user._id;

        Userlist.findById(userID, function (err, user) {

            if (err) return handleError(err);

            // Check if listing is already in the list
            var IndexOfListing = user.mylist.indexOf(req.body._id);
            if (IndexOfListing == -1) {
                
                //add listing to mylist
                user.mylist.push(req.body);
				//add a popularity point to the listing
				List.findById(req.body, function (err, listing) {
					listing.popularity = listing.popularity 
											? listing.popularity + 1 
											: 1;
					listing.save(function (err, updatedListing) {
						console.log('Saved the popularity: ', updatedListing.popularity);
					});
				});
                
            } else {
                
                // Remove from the list
                user.mylist.splice(IndexOfListing, 1);
				//subsctract a popularity point to the listing
				List.findById(req.body, function (err, listing) {
					listing.popularity = listing.popularity 
											? listing.popularity - 1 
											: 0;
					listing.save(function (err, updatedListing) {
						console.log('Saved the popularity: ', updatedListing.popularity);
					});
				});
            }
            

            // Save user with new listing
            user.save(function (err, updatedUser) {
                if (err) return handleError(err);
                List.find({
                    '_id': { $in: updatedUser.mylist}
                }).
                sort('neighborhood').
                populate('venue').
                exec(function (e, docs) {
                    return res.send(JSON.stringify(docs));
                });
            });
        });
    } else {
		return handleError('No defined user');
	};
});

/*//###################################
 * REORDER the user's list
 *///###################################

router.post('/updatemylist', function (req, res) {
    var Userlist = req.userlist;
    var List = req.list;

    //CHECK IF USER IS CONNECTED
    if (req.user) {

        // define variables
        var userID = req.user._id;
        var newListings = req.body;
        
        Userlist.findById(userID, function (err, user) {

            if (err) return handleError(err);
                
            //Replace listings in mylist
            user.mylist = req.body;
            console.log(user.mylist);
                
            // Save user with new listing
            user.save(function (err, updatedUser) {
                if (err) return handleError(err);
                
                return res.send(JSON.stringify(updatedUser));
                
            });
        });

    };
});


//###################################
// GET all listings from my list
// (not used anymore)
//###################################

router.get('/getmylist', (req, res) => {
    var List = req.list;
    var Venue = req.venue;
	
	//Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    
    //CHECK IF USER IS CONNECTED
    if (req.user) {
        const theirList = req.user.mylist;
        
        List
		.find()
		.where('_id').in(theirList)
		.where('end').gte(today)
        .populate('venue')
        .exec(function (e, docs) {
            res.json(docs);
        });
    } else {
        var docs = [];
        res.json(docs);
    }
});

//###################################
// GET all listings from a list
//###################################

router.get('/getusermylist/:user_slug', (req, res) => {
	var Userlist = req.userlist;
    var Venue = req.venue;
	
    Userlist
		.findOne({'slug': req.params.user_slug})
		.populate('mylist')
		.exec(function (e, user) {
			//Populate the mylist venues
			Userlist.populate(user, {
				path: 'mylist.venue',
				model: Venue
			  }, function(err, fullUser) {
			//found user
			res.json(fullUser);
			});
        });
    
});


//###################################
// GET to check session
//###################################

router.get('/checksession', (req, res) => {
    var User = req.user;
	var Userlist = req.userlist;
    
    if (User) {
		res.send(JSON.stringify(User));
		
    } else {
        res.send({error:'No user connected'});   
    }
});


//###################################
// GET USER INFO 
 //###################################
router.get('/user', function (req, res) {
    var User = req.user;

});


//###################################
// UPDATE USER INFO 
 //###################################
router.post('/updateuser', function (req, res) {
    var Userlist = req.userlist;
    var User = req.user;
    
    var newInfo = req.body;
    
    console.log('New user info: ', newInfo);
    var update = { $set: newInfo};

    
    Userlist.update({ _id: User._id }, update, {upsert:true}, function (err, updatedUser) {
        res.send(
            (err === null) ? {
                newuser: updatedUser
            } : {
                msg: err
            }
        );
    });

});

router.get('/getallusers', function (req, res){
	var Userlist = req.userlist;
	
	console.log('auth/getallusers');
	Userlist.find().
    sort('createdOn').
    limit(50).
    populate('mylist').
    exec(function (e, docs) {
        res.json(docs);
    });
});

module.exports = router;