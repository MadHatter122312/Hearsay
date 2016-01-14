// Require Module
var mongoose = require('mongoose');

// Setup schema for database

// Comment Schema
var CommentSchema = mongoose.Schema({
  body: {type:String},
  username: {type:String}
}, {timestamps:true});
// Hearsay Schema
var HearsaySchema = mongoose.Schema({
  body: {type:String},
  comment: [CommentSchema]
}, {timestamps:true});

// Export module
module.exports = mongoose.model('Hearsay', HearsaySchema);
