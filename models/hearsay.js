// Require Module
var mongoose = require('mongoose');

// Setup schema for database

// Comment Schema
var CommentSchema = mongoose.Schema({
  content: {type:String},
  username: {type:String}
}, {timestamps:true});
// Hearsay Schema
var HearsaySchema = mongoose.Schema({
  content: {type:String},
  comment: [CommentSchema],
  username: {type:String}
}, {timestamps:true});

// Export module
module.exports = mongoose.model('Hearsay', HearsaySchema);
