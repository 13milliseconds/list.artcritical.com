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
    artists: [{
        type: String, 
        ref: 'Artist'
    }],
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
    neighborhood: Number,
    review: String,
	created_at: Date,
    updated_at: Date,
	updated_by: {
        type: String,
		ref: 'User'
    },
    events: [eventSchema]
});

//compile the model
module.exports = {
    list: mongoose.model('List', listingSchema),
    trash: mongoose.model('Trash', listingSchema),
    archive: mongoose.model('Archive', listingSchema)
}
