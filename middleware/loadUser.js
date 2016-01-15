// ~~~~~~~~~~MODEL~~~~~~~~~~~~~ //
var User = require('../models/user');

// ~~~~~~~~~~CUSTOM MIDDLEWARE~~~~~~~~~~~~~ //
// If token is found, load that user
function loadUser(req, res, next){
  if(req.cookies.token){
    // Find that user by the token
    User.findOne({token: req.cookies.token}, function(err, databaseUser){
      if(err) return err;
      req.user = databaseUser;
      next();
    });
  } else {
    next();
  }
}

// ~~~~~~~~~~EXPORTS~~~~~~~~~~~~~ //
module.exports = loadUser;
