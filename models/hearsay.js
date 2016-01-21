// Require Module
var mongoose = require('mongoose');

// Setup schema for database

// Comment Schema
var CommentSchema = mongoose.Schema({
  bodyText: {type: String},
  username: {type: String}
}, {timestamps:true});
// Hearsay Schema
var HearsaySchema = mongoose.Schema({
  bodyText: {type: String},
  comment: [CommentSchema],
  username: {type: String},
  location: {type: String}
}, {timestamps:true});

// Export module
module.exports = mongoose.model('Hearsay', HearsaySchema);
