var express = require('express');
var router = express.Router();
var passport = require('passport');


//###################################
// SIGNUP
//###################################

router.post('/signup', async(req, res) => {
    passport.authenticate('local-signup')(req, res, () => {
        console.log('Registering');
        // If logged in, we should have user info to send back
        if (req.user) {
            passport.authenticate('local-login')(req, res, () => {
                console.log('auth/signup: Signed in');
                
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
        console.log('Logged in');
        // If logged in, we should have user info to send back
        if (req.user) {
            return res.send(JSON.stringify(req.user));
        }

        // Otherwise return an error
        return res.send(JSON.stringify({
            error: 'There was an error logging in'
        }));
    });
});

//###################################
// FACEBOOK LOGIN
//###################################

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
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
        var listingID = req.body.listingID;

        Userlist.findById(userID, function (err, user) {

            if (err) return handleError(err);

            // Check if listing is already in the list
            var IndexOfListing = user.mylist.indexOf(listingID);
            if (IndexOfListing == -1) {
                
                //add listing to mylist
                user.mylist.push(listingID);
                
            } else {
                
                // Remove from the list
                user.mylist.splice(IndexOfListing, 1);
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
    };
});


//###################################
// GET all listings from my list
//###################################

router.get('/getmylist', (req, res) => {
    var List = req.list;
    var Venue = req.venue;
    
    //CHECK IF USER IS CONNECTED
    if (req.user) {
        const theirList = req.user.mylist;
        
        List.find({
            '_id': { $in: theirList}
        }).
        sort('neighborhood').
        populate('venue').
        exec(function (e, docs) {
            res.json(docs);
        });
    } else {
        var docs = [];
        res.json(docs);
    }
});

// GET to check session
router.get('/checksession', (req, res) => {

    if (req.user) {
        return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({}));
});


//###################################
// GET USER INFO 
 //###################################
router.get('/user', function (req, res) {
    var User = req.user;

    console.log(User);

});


//###################################
// UPDATE USER INFO 
 //###################################
router.post('/updateuser', function (req, res) {
    var Userlist = req.userlist;
    var User = req.user;
    
    var newInfo = {
        'avatar': req.body.avatar,
        'local.username': req.body.email,
        'local.name': req.body.name
        }
    
    console.log('New user info: ', newInfo);
    var update = { $set: newInfo};

    
    Userlist.update({ _id: User._id }, update, {upsert:true}, function (err, updatedUser) {
        console.log('Updated User: ', updatedUser)
        res.send(
            (err === null) ? {
                newuser: updatedUser
            } : {
                msg: err
            }
        );
    });

});

module.exports = router;