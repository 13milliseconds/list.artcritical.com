var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var bcrypt = require('bcrypt'); // encripts password

// Create the Listings table ==================================

var userSchema = mongoose.Schema({
    firstname        : String,
	lastname         : String,
	slug             : String,
    local            : {
        username     : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        username     : String
    },
    userAccess: Number,
    avatar: String,
	bio: String,
	website: String,
	createdOn: {type: Date, default: Date.now},
	lastConnection: {type: Date},
    mylist: [{type: String, ref: 'List'}]
});

userSchema.methods.generateHash = function(password) {  
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {  
  return bcrypt.compareSync(password, this.local.password);
};

//compile the model

module.exports = {
    user: mongoose.model('User', userSchema),
    userTrash: mongoose.model('UserTrash', userSchema)
}
