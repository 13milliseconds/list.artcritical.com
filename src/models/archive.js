var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// Create the Archive table ==================================

//This is where we'll store the past listings

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
    events: [],
    image: String,
    thumb: String,
	popularity: Number
});

//compile the model

module.exports = mongoose.model('Archive', archiveSchema);
