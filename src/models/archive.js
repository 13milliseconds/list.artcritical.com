var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// Create the Archive table ==================================

//This is where we'll store the past listings

var eventSchema = new Schema({ 
    name: String,
    type: String,
    date: {type: Date},
    description: String 
});

var archiveSchema = mongoose.Schema({
    name: String,
    start: Date,
    end: Date,
    description: String,
    venue: {
        type: String,
		ref: 'Venue'
      },
    event: Boolean,
    image: String,
	popularity: Number,
    events: [eventSchema]
});

//compile the model

module.exports = mongoose.model('Archive', archiveSchema);
