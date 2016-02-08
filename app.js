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

// Connect Mongoose to MongoDB
var mongoPath = process.env.MONGOLAB_URI;
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
