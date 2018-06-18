var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// Create the Artist table ==================================

var artistSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
	created_at: Date,
    updated_at: Date,
	updated_by: {
        type: String,
		ref: 'User'
    }
});

//compile the model
module.exports = {
    artist: mongoose.model('Artist', artistSchema),
    trash: mongoose.model('ArtistTrash', artistSchema)
}
