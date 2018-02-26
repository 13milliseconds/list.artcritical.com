// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var FacebookStrategy   = require('passport-facebook').Strategy;
import AuthActions from '../actions/AuthActions';


// load up the user model
var User            = require('../models/user');
var Venue            = require('../models/venue');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
      done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
      User.findById(id)
          .populate('mylist')
          .exec(function(err, user) {
                //Populate the mylist venues
                User.populate(user, {
                    path: 'mylist.venue',
                    model: Venue
                  }, function(err, fullUser) {

                //found user
                return done(null, fullUser);
                });
            });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

     passport.use('local-signup', new LocalStrategy({
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
         console.log('Passport Signup Initialization')
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.username' :  username }).exec(function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);
                console.log('Error: ' + err)

            // check to see if theres already a user with that email
            if (user) {
                console.log('That email is already taken.')
                return done(null, false, { message: 'That email is already taken.'});
            } else {
                console.log("New User..");
                // create the user
                var newUser             = new User();

                // set the user's local credentials
                newUser.name      		= req.body.name;
				newUser.slug      		= req.body.name.replace(/\s+/g, '').toLowerCase();
                newUser.local.username  = req.body.username;
				newUser.userAccess 		= 0;
                newUser.local.password  = newUser.generateHash(password);
				newUser.facebook  		= {};
				
				//Check if slug already exist
				var count = 0;
				var ogSlug = newUser.slug;
				function checkSlug() {
					console.log('Start checking');
					User.findOne({ 'slug' :  newUser.slug }).exec(function(err, user) {
						if (user){
							console.log('Slug already exist');
							count = count + 1;
							newUser.slug = ogSlug + count;
							console.log(newUser.slug);
							checkSlug();
						} else {
							console.log('Slug is unique');
							// save the user
							newUser.save(function(err) {
								if (err)
									throw err;
								return done(null, newUser);
							});
						}
					});	
				};
				checkSlug();
            }

        });    

        });

    }));
    
    // Generates hash using bCrypt
    var createHash = function(password){
     return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
    
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

   passport.use('local-login', new LocalStrategy(
      function(username, password, done) {
        User.findOne({ 'local.username': username })
            .populate('mylist')
            .exec(function(err, user) {
          if (err) { 
              console.log('Incorrect Something');
              return done(err); 
          }
          if (!user) {
              console.log('Incorrect Username');
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.validPassword(password)) {
              console.log('Incorrect Password');
            return done(null, false, { message: 'Incorrect password.' });
          }
			//Define today's date
			var today = new Date(),
				newList= [];
    		today.setHours(0, 0, 0, 0);
			
			//Check that all listings are present
			user.mylist.forEach(function (listing){
				if (listing.end >= today){
					newList.push(listing);	
				}
			});
			
			//Replace the list with only current ones
			user.mylist = newList;
			
             //Populate the mylist venues
                User.populate(user, {
                    path: 'mylist.venue',
                    model: Venue
                  }, function(err, fullUser) {
                    //found user
                    return done(null, fullUser);
                });
          
        });
      }
    ));
    
    // =========================================================================
    // FACEBOOK LOGIN =============================================================
    // =========================================================================
    
    passport.use(new FacebookStrategy({
        clientID: "1154923567943109",
        clientSecret: "9ab1f837eabcc53aafadc9657eb65f19",
        callbackURL: process.env.BASE_URI + "/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'email']
      },
      function(accessToken, refreshToken, profile, done) {
        
        //check user table for anyone with a facebook ID of profile.id
        User.findOne({'facebook.id': profile.id })
            .populate('mylist')
            .exec(function(err, user) {
            if (err) {
                console.log("Error", err);
                return done(err);
            }
            //No user was found
            if (!user) {
				
				console.log("New user", user);
				// create the user
                var newUser             = new User();

                // set the user's local credentials
                newUser.name      		= profile.displayName;
				newUser.slug      		= profile.displayName.replace(/\s+/g, '').toLowerCase();
				newUser.userAccess 		= 0;
                newUser.facebook.id  	= profile.id;
                newUser.facebook.token  = accessToken;
				newUser.local  			= {};
				
				//Check if slug already exist
				var count = 0;
				var ogSlug = newUser.slug;
				var checkSlug = function () {
					console.log('Start checking');
					User.findOne({ 'slug' :  newUser.slug }).exec(function(err, user) {
						if (user){
							console.log('Slug already exist');
							count = count + 1;
							newUser.slug = ogSlug + count;
							checkSlug();
						} else {
							console.log('Slug is unique');
							// save the user
							newUser.save(function(err) {
								if (err) console.log(err);
								console.log(newUser);
								AuthActions.facebookLogin(newUser);
								return done(err, newUser);
							});
						}
					});	
				};
				checkSlug();

            } else {
                
                //Populate the mylist venues
                User.populate(user, {
                    path: 'mylist.venue',
                    model: Venue
                  }, function(err, fullUser) {
                    
                    //found user
                    AuthActions.facebookLogin(fullUser);
                    return done(err, fullUser);
                    });
            }
        });
    }
    ));


};