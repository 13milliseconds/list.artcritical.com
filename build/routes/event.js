var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

import moment from 'moment';



//#######################
// GET ALL UPCOMING EVENTS
//#######################

router.get('/upcoming', function (req, res) {
    var Event = req.event;

    //Find today's date
    var today = moment().startOf('day');

    Event.find().
	where('date').gte(today).
    where('venue').exists().
    where('type').ne('reception').
    sort('date').
    populate('venue').
    populate('list').
    populate('artists').
    exec(function (e, docs) {
        console.log(docs);
        res.json(docs);
    });
});

//#######################
/* FIND listings based on text */
//#######################

router.get('/find/:regex_input', function (req, res, next) {
    var Event = req.event;

    var regexp = new RegExp(req.params.regex_input, "i");
    
    Event
    .find({name: regexp})
    .exec(function (err, listings) {
    if (err)
        res.send(err);
        
    var results = [];
    listings.map(function (theevent) {
        results.push({
            value: theevent._id,
            label: theevent.name
        });
    })

    res.json(results);
    });

});

//#######################
// GET ONE listing 
//#######################
router.get('/getinfo/:id', function (req, res, next) {
    var Event = req.event;

    Event.findOne({
        _id: req.params.id
    }).
	where('venue').ne('').
    populate('venue').
    populate('updated_by').
    exec(function (e, docs) {
        if (e)
            res.send(e);
        res.json(docs);
    });

});


//############################
// POST a new event.
//############################

router.post('/add', function (req, res) {
    var Event = req.event;

    // define a new entry
    var newevent = req.body;

    // Save when and who created it
	var now = moment();
	newevent.created_at = now;
	newevent.updated_at = now;
    newevent.updated_by = req.user._id;
    
    newevent = new Event(newevent);

    //Save this new entry
    newevent.save(function (err, savedEvent) {
        res.send(
            (err === null) ? savedEvent : { msg: err }
        );
    });

});


//#######################
// UPDATE a listing.
//#######################

router.post('/update', function (req, res) {
    var Event = req.event;

    // define a new entry
    var theevent = req.body;

    // Save when and who updated it
	var now = moment()
	theevent.updated_at = now;
    theevent.updated_by = req.user._id;

    theevent = new Event(theevent);

    Event.update({
        _id: theevent._id
        }, {
            $set: theevent
        }, function (err, data) {
            console.log('success: ', data)
            res.send(
                (err === null) ? {
                    msg: ''
                } : {
                    msg: err
                }
            );
    });

});

//#######################
// DELETE an event.
//#######################

router.post('/delete/:event_id', function (req, res) {
    var Event = req.event;
    var EventTrash = req.eventTrash;

    var eventToDelete = req.params.event_id;

    Event.findOne({ _id: eventToDelete }, function(err, result) {

        let swap = new EventTrash(result);
        swap._id = mongoose.Types.ObjectId()
        swap.isNew = true
    
        swap.save(function (err, newevent) {
            res.send(
                (err === null) ? {
                    data: newevent
                } : {
                    msg: err
                }
            );
        });

        result.remove();
    
    })

});



module.exports = router;