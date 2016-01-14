// ~~~~~~~~~~~~MODULES~~~~~~~~~~~~~~~~~ //
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Instance of Express
var app = express();

// Setup EJS engine support
app.set('view engine', 'ejs');

// Connect Mongoose to MongoDB
<<<<<<< HEAD
var mongoPath = 'mongodb://localhost/hearsays';
=======
var mongoPath = 'mongodb://locahost/hearsays';
>>>>>>> master
mongoose.connect(mongoPath);


// ~~~~~~~~~~MIDDLEWARE~~~~~~~~~~~~~ //
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(morgan('dev'));
// Custom Middleware for Accessing APIs
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// ~~~~~~~~~~IMPORT ROUTER~~~~~~~~~~~~~ //
var indexRouter = require('./routes/index');
var hearsaysRouter = require('./routes/api/hearsays');
<<<<<<< HEAD
var usersRouter = require('./routes/users');
=======
var users = require('./routes/users');
>>>>>>> master

// ~~~~~~~~~~MAP ROUTER~~~~~~~~~~~~~ //
app.use('/', indexRouter);
app.use('/api/hearsays', hearsaysRouter);
<<<<<<< HEAD
app.use('/api/users', usersRouter);

// ~~~~~~~~~~LISTENER~~~~~~~~~~~~~ //
var port = 8080;
app.listen(port, function() {
  console.log('Listening on '+ port);
=======
app.use('/api/users', users);

// ~~~~~~~~~~LISTENER~~~~~~~~~~~~~ //
app.listen(3000, function(){
  console.log('.... Listening on 3000');
>>>>>>> master
});
