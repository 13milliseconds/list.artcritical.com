var mongoose = require('mongoose');

// Create the Listings table ==================================

var featureSchema = mongoose.Schema({
    date: Date,
    text: String,
    type: String,
    list: {
        ref: 'List',
        type: String
      },
    event: {
        ref: 'Event',
        type: String
    },
	  venue: {
        ref: 'Venue',
        type: String
      }
});

//compile the model

module.exports = mongoose.model('Feature', featureSchema);
