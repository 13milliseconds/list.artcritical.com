var mongoose = require('mongoose');

// Create the Listings table ==================================

var listingSchema = mongoose.Schema({
    name: String,
    type: String,
    start: Date,
    end: Date,
    venue: String,
    description: String,
});

//compile the model

module.exports = mongoose.model('List', listingSchema);
