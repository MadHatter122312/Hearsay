// ~~~~~~~~~~MODULES~~~~~~~~~~~~~ //
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var crypto = require('crypto');

// ~~~~~~~~~~SCHEMA~~~~~~~~~~~~~ //
var UserSchema = mongoose.Schema({
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
UserSchema.pre('save', function(next){ //pre-save hook: BEFORE save happens
  if(this.isModified('password')){ // If the password has changed
    this.password = bcrypt.hashSync(this.password, 10); // Has the password
  }
  return next();
});

// Give token to user with crypto encryption
UserSchema.methods.setToken = function(err, done){
  var scope = this;
  crypto.randomBytes(256, function(err, rawToken){
    if(err) return done(err);
    scope.token = rawToken;
    scope.save(function(){
      if(err) return done(err);
      done();
    });
  });
};

// Authenticate user's password
UserSchema.methods.authenticate = function(passwordAttempt, callback){
  bcrypt.compare(passwordAttempt, this.password, function(err, isMatch){
    if(err) return callback(err);
    callback(null, isMatch);
  });
};

// ~~~~~~~~~~EXPORTS~~~~~~~~~~~~~ //
module.exports = mongoose.model('User', UserSchema);
