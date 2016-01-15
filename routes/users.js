// ~~~~~~~~~~MODULES~~~~~~~~~~~~~ //
var express = require('express');
var router = express.Router();
var User = require('../models/user');

// ~~~~~~~~~~GET ROUTE~~~~~~~~~~~~~ //
router.get('/',function(req, res){
  User.find({}, function(err, databaseUsers){
    res.json({users: databaseUsers});
  });
});

// ~~~~~~~~~~POST ROUTE~~~~~~~~~~~~~ //
router.post('/', function(req, res){ // POST /api/users
  var userData = req.body.user;
  var newUser = new User(userData);
  newUser.save(function(err, databaseUser){
    res.json(databaseUser);
    // res.redirect('/'); // Questionable because it's an API
  });
});

// ~~~~~~~~~~PATCH ROUTE~~~~~~~~~~~~~ //
router.patch('/', function(req, res){ // PATCH /api/users
  if(req.user){ // If a user has been found via token
    // req.user.update(req.body.user); // modify the user information
    req.user.password = req.body.user.password; // Modify the users password

    req.user.save(function(err, databaseUser){ // Save the user
      res.json(databaseUser); // Send the updated user as JSON
    });
  }
});

// ~~~~~~~~~~POST AUTHENTICATE ROUTE~~~~~~~~~~~~~ //
router.post('/authenticate', function(req, res){
  console.log('Authenticate Tried');

  // User.findOne({username: req.body.username}, function(err, databaseUser){
  //   if(databaseUser){
  //     databaseUser.authenticate(req.body.password, function(err, isMatch){
  //       if(isMatch){
  //         databaseUser.setToken(err, function(){
  //           res.json({description: 'success', token: databaseUser.token});
  //         });
  //       }
  //     });
  //   }
  // });

  var usernameTry = req.body.username;
  var passwordTry = req.body.password;
  User.findOne({username: usernameTry}, function(err, databaseUser){
    databaseUser.authenticate(passwordTry, function(err, isMatch){
      if(isMatch)
        databaseUser.setToken(function(){
          res.json({description: 'password is correct', token: databaseUser.token});
        });
      else
        res.json({description: 'password is incorrect'});
    });
  });
});

// ~~~~~~~~~~EXPORTS~~~~~~~~~~~~~ //
module.exports = router;
