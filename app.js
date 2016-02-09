// ~~~~~~~~~~~~MODULES~~~~~~~~~~~~~~~~~ //
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var loadUser = require('./middleware/loadUser');
require('dotenv').load();

// Instance of Express
var app = express();

// Old Connect Mongoose to MongoDB
var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/hearsays';


// Working on heroku
// Connect Mongoose to MongoDB
// var mongoPath = 'mongodb://heroku_1qwbzvwc:apcpuagadacbkubr6h0mgag1sf@ds059185.mongolab.com:59185/heroku_1qwbzvwc';
//herku can't find the process.env so we had to take the hardwired url and insert it here...now it breaks my local
mongoose.connect(mongoPath);

// Setup EJS engine support
app.set('view engine', 'ejs');


// ~~~~~~~~~~MIDDLEWARE~~~~~~~~~~~~~ //
app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(loadUser);

// Custom Middleware for Accessing APIs
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


// ~~~~~~~~~~IMPORT ROUTER~~~~~~~~~~~~~ //
var indexRouter = require('./routes/index');
var hearsaysRouter = require('./routes/api/hearsays');
var usersRouter = require('./routes/users');

// ~~~~~~~~~~MAP ROUTER~~~~~~~~~~~~~ //
app.use('/', indexRouter);
app.use('/api/hearsays', hearsaysRouter);
app.use('/api/users', usersRouter);

// ~~~~~~~~~~LISTENER~~~~~~~~~~~~~ //
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Listening on '+ port);
});
