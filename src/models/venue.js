var mongoose = require('mongoose');

// Create the Listings table ==================================

var venueSchema = mongoose.Schema({
    name: String,
    slug: String,
    website: String,
    address: String,
    city: String,
	state: String,
	zipcode: Number,
    neighborhood: Number,
    coordinates: {
        lat: Number,
        long: Number
    }
});

//compile the model
module.exports = mongoose.model('Venue', venueSchema);
