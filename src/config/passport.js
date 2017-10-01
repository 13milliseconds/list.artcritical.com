// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var FacebookStrategy   = require('passport-facebook').Strategy;


// load up the user model
var User            = require('../models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log('serializeUser called.');
      done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('deserializeUser called.');
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

     passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
         console.log('Passport Signup Initialization')
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);
                console.log('Error: ' + err)

            // check to see if theres already a user with that email
            if (user) {
                console.log('That email is already taken.')
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
                console.log("New User..");
                // if there is no user with that email
                // create the user
                var newUser            = new User();

                // set the user's local credentials
                newUser.local.email    = email;
                newUser.local.password = newUser.generateHash(password);

                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
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
          console.log('Signing In ' + username);
        User.findOne({ 'local.username': username }, function(err, user) {
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
            console.log('Signed In');
          return done(null, user);
        });
      }
    ));
    
    passport.use(new FacebookStrategy({
        clientID: "1154923567943109",
        clientSecret: "9ab1f837eabcc53aafadc9657eb65f19",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    ));


};