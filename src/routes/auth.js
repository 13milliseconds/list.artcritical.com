var express = require('express');
var router = express.Router();
var passport = require('passport');


/*router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });*/

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/admin',
    failureRedirect: '/signup',
    failureFlash: true
}));

// LOGIN
router.post('/login', async(req, res) => {
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
});

/*
 * UPDATE the user's list
 */
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

// GET all listings from my list
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
        console.log('No user in the req');
        return null;
    }
});

// GET to check session
router.get('/checksession', (req, res) => {

    if (req.user) {
        return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({}));
});

// GET to /logout
router.get('/logout', (req, res) => {
    req.logout();
    return res.send(JSON.stringify(req.user));
});

/*
 * GET Current User Info ===================
 */
router.get('/user', function (req, res) {
    var User = req.user;

    console.log(User);

});

module.exports = router;