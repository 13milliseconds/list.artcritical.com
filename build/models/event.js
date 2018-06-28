var mongoose = require('mongoose');

// Create the Listings table ==================================

var eventSchema = mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    type: String,
    venue: {
        type: String,
		ref: 'Venue'
    },
    list: {
        type: String,
		ref: 'List'
    },
    artists: [{
        type: String,
		ref: 'Artist'
    }],
    image: String,
    popularity: Number,
	created_at: Date,
    updated_at: Date,
	updated_by: {
        type: String,
		ref: 'User'
    }
});

//compile the model
module.exports = {
    event: mongoose.model('Event', eventSchema),
    trash: mongoose.model('EventTrash', eventSchema),
    archive: mongoose.model('EventArchive', eventSchema)
}
