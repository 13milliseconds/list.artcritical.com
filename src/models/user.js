var mongoose = require('mongoose');
var bcrypt = require('bcrypt'); // encripts password

// Create the Listings table ==================================

var userSchema = mongoose.Schema({
    name             : String,
    local            : {
        username     : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        username     : String
    },
    avatar: String,
    mylist: [String],
});

userSchema.methods.generateHash = function(password) {  
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {  
  return bcrypt.compareSync(password, this.local.password);
};

//compile the model

module.exports = mongoose.model('User', userSchema);
