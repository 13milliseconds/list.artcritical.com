var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var crypto = require('crypto');
var sgMail = require('@sendgrid/mail');
import async from 'async'
import moment from 'moment'


var handleError = (string) => {
    return {msg: string}
}

//###################################
// SIGNUP
//###################################

router.post('/signup', async(req, res) => {
    passport.authenticate('local-signup')(req, res, () => {
        // If logged in, we should have user info to send back
        if (req.user) {
            passport.authenticate('local-login')(req, res, () => {
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
			
			console.log('Logged in', req.user.slug);
			
			var now = moment();
			var newInfo = {lastConnection: now};
			var update = { $set: newInfo};

			Userlist.update({ _id: req.user._id }, update, {upsert:true}, function (err, updatedUser) {
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

router.get('/facebook', passport.authenticate('facebook', { display: 'popup' }));


router.get('/facebook/callback', function(req, res){
           
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
            res.redirect('/auth/facebook/success');
            //res.redirect('/');
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

//###################################
// FORGOT THE PASSWORD
//###################################

router.post('/forgot', function (req, res) {

    var Userlist = req.userlist;

    async.waterfall([
        function(done) {
          crypto.randomBytes(20, function(err, buf) {
            var token = buf.toString('hex');
            done(err, token);
          });
        },
        function(token, done) {
          Userlist.findOne({ 'local.username': req.body.email }, function(err, user) {
            if (!user) {
              console.log('error', 'No account with that email address exists.');
              return res.redirect('/reset');
            }
    
            user.resetPasswordToken = token;
            user.resetPasswordExpires = moment().add(1, 'hours');

            user.save(function(err) {
              done(err, token, user);
            });
          });
        },
        function(token, user, done) {

            // using SendGrid's v3 Node.js Library
            // https://github.com/sendgrid/sendgrid-nodejs
            
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            const msg = {
            to: user.local.username,
            from: 'hello@artcritical.com',
            subject: 'Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account at artcritical.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            };

            sgMail.send(msg);

            done();
        }
      ], function(err) {
        if (err) return next(err);
        return res.json({result: true})
      });
});

/*//###################################
 * Check the Reset TOKEN
 *///###################################

router.post('/resettoken', function(req, res) {
    var Userlist = req.userlist;

    Userlist.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: moment() } }, function(err, user) {
      return res.json(user)
    });
  });


  /*//###################################
 * RESET the password
 *///###################################

 router.post('/reset', function(req, res){

    var Userlist = req.userlist;

    console.log(req.body)
    
    async.waterfall([
        function(done) {
            Userlist.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
            if (!user) {
              console.log('No User')
              return res.json({err: 'No User Found'})
            }

            user.local.password = user.generateHash(req.body.password)
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
    
            user.save(function(err, newUser) {
                done(err, newUser);
            });
          });
        },
        function(user, done) {

            sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            const msg = {
            to: user.local.username,
            from: 'hello@artcritical.com',
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' +
              'This is a confirmation that the password for your account ' + user.local.username + ' has just been changed.\n'
            };

            sgMail.send(msg);

            done();
        }
      ], function(err) {
        return res.json({err: ''})
      });
 })

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

    //CHECK IF USER IS CONNECTED
    if (req.user) {

        // define variables
        var userID = req.user._id;
        
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
    
	//Find today's date
    var today = moment().startOf('day');
    
    //CHECK IF USER IS CONNECTED
    if (req.user) {
        List
		.find()
		.where('_id').in(req.user.mylist)
		.where('end').gte(today)
        .populate('venue')
        .populate('relatedEvents')
        .populate('artists')
        .exec(function (e, docs) {
            res.json({list: docs, user: req.user});
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
    var List = req.list;
	
    Userlist
		.findOne({'slug': req.params.user_slug})
		.populate('mylist')
		.exec(function (e, user) {
			//Populate the mylist venues
            List
                .find({ _id : { $in: user.mylist } })
                .populate('venue') 
                .populate('artists')
                .exec(function(err, listings) {
                    //found user
                    let fullUser = user
                    fullUser.mylist = listings
                    res.json(fullUser);
			    });
        });
    
});


//###################################
// GET to check session
//###################################

router.get('/checksession', (req, res) => {
    var User = req.user;
    
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

    console.log('auth/updateuser');
    var Userlist = req.userlist;
    
    var newInfo = req.body;

    Userlist.findOne({ _id: newInfo._id }, function(err, user){
        if (user) {

            //If the password is changed
            if (newInfo.password1) {
                console.log('Hasing the password ' + newInfo.password1)
                newInfo.local.password = user.generateHash(newInfo.password1)
                console.log('Result: ' + newInfo.local.password)
            }

            console.log('New user info: ', newInfo);

            Userlist.update({ _id: newInfo._id }, { $set: newInfo}, {upsert:true}, function(err, updatedUser) {
                console.log('boom', updatedUser, newInfo._id)
                res.send(
                    (err === null) ? {
                        newuser: updatedUser
                    } : {
                        msg: err
                    }
                );
            });

        } else {
            res.send('No User Found');
        }

    })
   
});

//###################################
// DELETE USER 
 //###################################
 router.post('/deleteuser', function (req, res) {
    
    console.log('auth/deleteuser');
    var Userlist = req.userlist;
    var UserTrash = req.usertrash;

    var id = req.body;

    Userlist.findOne({ _id: id }, function(err, result) {

        if (result) {
            let swap = new UserTrash(result);
            swap._id = mongoose.Types.ObjectId()
            swap.isNew = true
        
            swap.save(function (err, newtrash) {
                res.send(
                    (err === null) ? {
                        data: newtrash
                    } : {
                        msg: err
                    }
                );
            });

            result.remove();
        } else {
            res.send('No User Found');
        }
    
    })

});

//###################################
// GET ALL USERS
 //###################################

router.get('/getallusers', function (req, res){
	var Userlist = req.userlist;
	
	console.log('auth/getallusers');
	Userlist.find().
    sort('createdOn').
    populate('mylist').
    exec(function (e, docs) {
        res.json(docs);
    });
});

module.exports = router;