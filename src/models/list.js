var mongoose = require('mongoose');

// Create the Listings table ==================================

var listingSchema = mongoose.Schema({
    name: String,
    //type: String,
    start: Date,
    end: Date,
    description: String,
    neighborhood: Number,
    venue: {
        ref: 'Venue',
        type: String
      },
    event: Boolean,
    events: [],
    image: String,
    thumb: String
});

//compile the model

module.exports = mongoose.model('List', listingSchema);
