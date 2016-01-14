// Require modules
var express = require('express');
var router = express.Router();

// Require instance of model
var Hearsays = require('../../models/hearsay');

// GET
router.get('/', function(req, res){
  Hearsays.find({}, function(err, dbHearsays){
    if(err){ };
    res.json({ hearsay: dbHearsays});
  });
});

// GET ONLY ONE
router.get('/:id', function(req, res, next){
  Hearsays.findById( req.params.id, function(err, dbHearsay){
    if(err) {};
    res.json(dbHearsay);
  });
});

// POST
router.post('/', function(req, res, next){
  console.log('creating');
  Hearsays.create(req.body.hearsay, function(err, hearsay){
    res.json(hearsay);
  });
});

// PUT
router.put('/:id', function(req, res){
  console.log('updating');
  Hearsays.findByIdAndUpdate(req.params.id, req.body.hearsay, {new:true}, function(err, hearsay){
    res.json(hearsay);
  });
});

// DELETE
router.delete('/:id', function(req, res){
  Hearsays.findByIdAndRemove(req.params.id, function(err){
    if(err){ res.status(500).end(); };
    res.status(204).end();
  });
});

// Export module
module.exports = router;
