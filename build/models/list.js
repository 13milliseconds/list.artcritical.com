var mongoose = require('mongoose');

// Create the Listings table ==================================

var listingSchema = mongoose.Schema({
    name: String,
    artists: [{
        type: String, 
        ref: 'Artist'
    }],
    start: Date,
    end: Date,
    description: String,
    blurb: String,
    venue: {
        type: String,
		ref: 'Venue'
    },
    event: Boolean,
    image: String,
    thumb: String,
    popularity: Number,
    neighborhood: Number,
    review: String,
	created_at: Date,
    updated_at: Date,
	updated_by: {
        type: String,
		ref: 'User'
    },
    relatedEvents: [{
        type: String,
		ref: 'Event'
    }]
});

//compile the model
module.exports = {
    list: mongoose.model('List', listingSchema),
    trash: mongoose.model('Trash', listingSchema),
    archive: mongoose.model('Archive', listingSchema)
}
