var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// Create the Listings table ==================================

var eventSchema = new Schema({ 
    name: String,
    type: String,
    date: {type: Date},
    description: String 
});

var listingSchema = mongoose.Schema({
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
    thumb: String,
	popularity: Number,
	created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
	updated_by: {
        type: String,
		ref: 'User'
    },
    events: [eventSchema]
});

//compile the model

module.exports = mongoose.model('List', listingSchema);
