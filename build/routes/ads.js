var express = require('express');
var router = express.Router();
import moment from 'moment'


//#######################
// GET ALL Ads 
//#######################

router.get('/getall', function (req, res) {
    var Ads = req.ads

    Ads
    .find()
    .populate('updated_by')
    .exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// GET Current Ads 
//#######################

router.get('/getads', function (req, res) {
    var Ads = req.ads

    Ads
    .find({"locations" : {"$exists" : true, "$ne" : ""}})
    .populate('updated_by')
    .exec(function (e, docs) {
        res.json(docs);
    });
});

//############################
// POST a new ad
//############################

router.post('/add', function (req, res) {
    var Ads = req.ads;

    // define a new entry
    var newAd = new Ads(req.body);

    // Save when and who created it
	var now = moment();
	newAd.created_at = now;
	newAd.updated_at = now;
    newAd.updated_by = req.user._id;

    //Save this new entry
    newAd.save(function (err, savedAd) {
        res.send(
            (err === null) ? {
                data: savedAd
            } : {
                msg: err
            }
        );
    });

});


//########################
// UPDATE an ad.
//########################

router.post('/update', function (req, res) {
    var Ads = req.ads;

    // define a new entry
    var theAd = new Ads(req.body);
	
	// Save when and who created it
	var now = moment();
	theAd.updated_at = now;
	theAd.updated_by = req.user._id;

    Ads.findOneAndUpdate({
        _id: theAd._id
    }, {
        $set: theAd
    },
    {new: true}, //Sends back the new updated document
    function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });

});

//#######################
// DELETE an ad.
//#######################

router.post('/delete/:ad_id', function (req, res) {
    var Ads = req.ads;
	
    Ads.remove({
        '_id': req.params.ad_id
    }, function (err) {
        res.send((err !== null) && {
            msg: 'error: ' + err
        });
    });

});

module.exports = router;
