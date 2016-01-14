// Require modules
var express = require('express');
var router = express.Router();

// Require instance of model
var Hearsay = require('../../models/hearsay');

// GET
router.get('/', function(req, res){
  Hearsay.find({}, function(err, dbHearsays){
    if(err){ };
    res.json({ hearsays: dbHearsays});
  });
});

// GET ONLY ONE
router.get('/:id', function(req, res, next){
  Hearsay.findById( req.params.id, function(err, dbHearsay){
    if(err) {};
    res.json(dbHearsay);
  });
});

// POST
router.post('/', function(req, res, next){
  console.log('creating');
  Hearsay.create(req.body.hearsay, function(err, hearsay){
    res.json(hearsay);
  });
});


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
    res.json(hearsay);
  });
});

// DELETE
router.delete('/:id', function(req, res){
  Hearsay.findByIdAndRemove(req.params.id, function(err){
    if(err){ res.status(500).end(); };
    res.status(204).end();
  });
});

// Export module
module.exports = router;
