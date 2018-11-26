var mongoose = require('mongoose');

// Create the Ad table ==================================

var adSchema = mongoose.Schema({
    name: String,
    link: String,
    notes: String,
    locations: String, //Where it goes on the website
    image: String,
    mobileImage: String,
	created_at: Date,
    updated_at: Date,
	updated_by: {
        type: String,
		ref: 'User'
    }
});

//compile the model
module.exports = mongoose.model('Ad', adSchema)
