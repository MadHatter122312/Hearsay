// Require modules
var express = require('express');
var router = express.Router();

// Require instance of model
<<<<<<< HEAD
var Hearsay = require('../../models/hearsay');

// GET
router.get('/', function(req, res){
  Hearsay.find({}, function(err, dbHearsays){
    if(err){ };
    res.json({ hearsays: dbHearsays});
=======
var Hearsays = require('../../models/hearsay');

// GET
router.get('/', function(req, res){
  Hearsays.find({}, function(err, dbHearsays){
    if(err){ };
    res.json({ hearsay: dbHearsays});
>>>>>>> master
  });
});

// GET ONLY ONE
router.get('/:id', function(req, res, next){
<<<<<<< HEAD
  Hearsay.findById( req.params.id, function(err, dbHearsay){
=======
  Hearsays.findById( req.params.id, function(err, dbHearsay){
>>>>>>> master
    if(err) {};
    res.json(dbHearsay);
  });
});

// POST
router.post('/', function(req, res, next){
  console.log('creating');
<<<<<<< HEAD
  Hearsay.create(req.body.hearsay, function(err, hearsay){
=======
  Hearsays.create(req.body.hearsay, function(err, hearsay){
>>>>>>> master
    res.json(hearsay);
  });
});

<<<<<<< HEAD
router.post('/:id/comments', function(req, res){
  var commentBody = req.body.comment;
  commentBody.username = req.user.username; //
  var hearsayID = req.params.id;
  Hearsay.findById(hearsayID, function(err, databaseHearsay){
    var commentNumber = databaseHearsay.comment.push(commentBody);
    databaseHearsay.save(function(err){
      // Just cause I wanted to send back the comment....
      res.json({comment: databaseHearsay.comment[commentNumber-1]});
    });
  });
});

// PUT
router.put('/:id', function(req, res){
  console.log('updating');
  Hearsay.findByIdAndUpdate(req.params.id, req.body.hearsay, {new:true}, function(err, hearsay){
=======
// PUT
router.put('/:id', function(req, res){
  console.log('updating');
  Hearsays.findByIdAndUpdate(req.params.id, req.body.hearsay, {new:true}, function(err, hearsay){
>>>>>>> master
    res.json(hearsay);
  });
});

// DELETE
router.delete('/:id', function(req, res){
<<<<<<< HEAD
  Hearsay.findByIdAndRemove(req.params.id, function(err){
=======
  Hearsays.findByIdAndRemove(req.params.id, function(err){
>>>>>>> master
    if(err){ res.status(500).end(); };
    res.status(204).end();
  });
});

// Export module
module.exports = router;
