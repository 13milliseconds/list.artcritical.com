var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// Create the Listings table ==================================

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
    events: [],
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
    }
});

//compile the model

module.exports = mongoose.model('List', listingSchema);
