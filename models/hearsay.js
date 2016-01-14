// Require Module
var mongoose = require('mongoose');

// Setup schema for database

// Comment Schema
var commentSchema = mongoose.Schema({
  content: {type:String},
  username: {type:String}
}, {timestamps:true});
// Hearsay Schema
var hearsaySchema = mongoose.Schema({
  content: {type:String},
  comment: [commentSchema]
}, {timestamps:true});

// Export module
module.exports = mongoose.model('Hearsay', hearsaySchema);
