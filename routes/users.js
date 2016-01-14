// ~~~~~~~~~~MODULES~~~~~~~~~~~~~ //
var express = require('express');
var router = express.Router();

// ~~~~~~~~~~GET ROUTE~~~~~~~~~~~~~ //
router.get('/',function(req, res){
  res.render('index', {title: 'Project Hearsay'});
});

// ~~~~~~~~~~POST ROUTE~~~~~~~~~~~~~ //
router.post('/', function(req, res){
  var userData = req.body.user;
  var newUser = new User(userData);
  newUser.save(function(err, databaseUser){
    res.redirect('/'); // Questionable because it's an API
  });
});

// ~~~~~~~~~~POST AUTHENTICATE ROUTE~~~~~~~~~~~~~ //
router.post('/authenticate', function(req, res){
  console.log('Authenticate Tried');
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
