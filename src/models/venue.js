var mongoose = require('mongoose');

// Create the Listings table ==================================

var venueSchema = mongoose.Schema({
    name: String,
    website: String,
    neighborhood: Number,
});

//compile the model

module.exports = mongoose.model('Venue', venueSchema);
