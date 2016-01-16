// ~~~~~~~~~~MODULES~~~~~~~~~~~~~ //
var express = require('express');
var router = express.Router();
var User = require('../models/user');

// ~~~~~~~~~~GET ROUTE~~~~~~~~~~~~~ //
// Index: All Users
router.get('/',function(req, res){  // GET /api/users
  User.find({}, function(err, databaseUsers){ // Get them all from database
    res.json({users: databaseUsers}); // Send them down as json
  });
});

// ~~~~~~~~~~POST ROUTE~~~~~~~~~~~~~ //
// Create a new user
router.post('/', function(req, res){ // POST /api/users
  var userData = req.body.user;  // Assign the user's data
  var newUser = new User(userData); // Make a new User using the user's data
  newUser.save(function(err, databaseUser){ // Save user to the database
    // res.json(databaseUser); // Send the new user as JSON
    res.redirect('/'); // Questionable because it's an API
  });
});

// ~~~~~~~~~~PATCH ROUTE~~~~~~~~~~~~~ //
// Update an existing user
router.patch('/', function(req, res){ // PATCH /api/users
  if(req.user){ // If a user has been found via token
    req.user.password = req.body.user.password; // Modify the users password

    req.user.save(function(err, databaseUser){ // Save the user
      res.json(databaseUser); // Send the updated user as JSON
    });
  }
});

// ~~~~~~~~~~POST ROUTE~~~~~~~~~~~~~ //
// Authenticate a user and a give token to that user
router.post('/authenticate', function(req, res){  // POST /api/user
  var usernameAttempt = req.body.username; // Assign the user's username to variable usernameAttempt
  var passwordAttempt = req.body.password; // Assign the user's password to variable passwordAttempt
  User.findOne({username: usernameAttempt}, function(err, databaseUser){
    if(databaseUser){ // If you found a user
      // check if the passwordAttempt matches that user's password in the database
      databaseUser.authenticate(passwordAttempt, function(err, isMatch){
        if(isMatch){ // If the password matches
          databaseUser.setToken(err, function(){ // Create a new token for that user
            res.json({description: 'success', token: databaseUser.token});
          });
        }
      });
    } else { // If no user is found, just return an error
      res.json({description: 'password is incorrect', status: 302});
    }
  });
});

// ~~~~~~~~~~EXPORTS~~~~~~~~~~~~~ //
module.exports = router;
