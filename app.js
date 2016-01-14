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
var mongoPath = 'mongodb://locahost/hearsays';
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
var users = require('./routes/users');

// ~~~~~~~~~~MAP ROUTER~~~~~~~~~~~~~ //
app.use('/', indexRouter);
app.use('/api/hearsays', hearsaysRouter);
app.use('/api/users', users);

// ~~~~~~~~~~LISTENER~~~~~~~~~~~~~ //
app.listen(3000, function(){
  console.log('.... Listening on 3000');
});
