var mongoose = require('mongoose');

// Create the Listings table ==================================

var venueSchema = mongoose.Schema({
    name: String,
    blurb: String,
    website: String,
    address: String,
    city: String,
    neighborhood: Number,
    coordinates: {
        lat: Number,
        long: Number
    }
});

//compile the model

module.exports = mongoose.model('Venue', venueSchema);
