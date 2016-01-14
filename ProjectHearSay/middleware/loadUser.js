// ~~~~~~~~~~MODEL~~~~~~~~~~~~~ //
var User = require('../models/user');

// ~~~~~~~~~~CUSTOM MIDDLEWARE~~~~~~~~~~~~~ //
function loadUser(req, res, next){
  if(req.cookies.token)
    User.findOne({token: req.cookies.token}, function(err, databaseUser){
      req.user = databaseUser;
      next();
    });
  else
    next();
};

// ~~~~~~~~~~EXPORTS~~~~~~~~~~~~~ //
module.exports = loadUser;
