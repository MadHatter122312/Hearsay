// ~~~~~~~~~~MODULES~~~~~~~~~~~~~ //
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var crypto = require('crypto');

// ~~~~~~~~~~SCHEMA~~~~~~~~~~~~~ //
var userSchema = mongoose.Schema({
  firstName: {type:String},
  lastName: {type:String},
  birthday: {type:Date},
  email: {type:String},
  username: {type:String},
  password: {type:String},
  location: {type:String},
  token: {type:String}
}, {timestamps:true});

// ~~~~~~~~~~METHODS~~~~~~~~~~~~~ //
UserSchema.pre('save', function(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});
// Authenticate user's password
UserSchema.methods.authenticate = function(passwordTry, callback){
  bcrypt.compare(passwordTry, this.password, function(err, isMatch){
    if(err) return callback(err);
    callback(null, isMatch);
  });
};
// Give token to user with crypto encryption
UserSchema.methods.setToken = function(callback){
  var scope = this;
  crypto.randomBytes(256, function(err, rawToken){
    scope.token = rawToken;
    scope.save(function(){
      callback();
    });
  });
};


// ~~~~~~~~~~EXPORTS~~~~~~~~~~~~~ //
module.exports = mongoose.model('User', userSchema);
