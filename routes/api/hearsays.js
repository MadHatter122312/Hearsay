// Require modules
var express = require('express');
var router = express.Router();

// Require instance of model
var Hearsay = require('../../models/hearsay');

// GET
router.get('/', function(req, res){
  if(req.query.search){
    var searchTerm = req.query.search;
    Hearsay.find({bodyText: new RegExp(searchTerm, 'i') }, function(err, databaseHearsays){
      res.json( {hearsays: databaseHearsays})
    });
  } else {
    Hearsay.find({}, function(err, databaseHearsays){
      if(err){ };
      res.json({hearsays: databaseHearsays});
    });
  }
});

// GET ONLY ONE
router.get('/:id', function(req, res, next){
  Hearsay.findById( req.params.id, function(err, databaseHearsay){
    if(err) {};
    res.json(databaseHearsay);
  });
});

// GET COMMMENT
router.get('/:id/comments', function(req, res, next){
  Hearsay.findById( req.params.id, function(err, databaseHearsay){
    if(err) {};
    res.json(databaseHearsay);
  });
});

// POST
router.post('/', function(req, res, next){
  console.log('creating');
  // console.log(req.user.location);
  var hearsayData = req.body.hearsay;
  var hearsay = new Hearsay(hearsayData);
  hearsay.username = req.user.username;
  hearsay.location = req.user.location;
  hearsay.save(function(err, databaseHearsay){
    res.json({hearsay: databaseHearsay});
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
// router.patch('/:id', function(req, res){
//   var hearsayData = req.hearsay.body;
//   // var hearsayBody = req.body.hearsay;
//   // var hearsayID = req.params.id
//   // console.log('updating');
//   Hearsay.findByIdAndUpdate(req.params.id, function(err, databaseHearsay){
//     databaseHearsay.save(function(err){
//       res.json({body: databaseHearsay.body})
//     });
//   });
// });

// UPDATE:  Update a user WITH the correct token
router.patch('/:id', function(req, res){  // PATCH /api/users
    req.hearsay.body = req.body.hearsay.bodyText; // Modify the users bio

    Hearsay.findByIdAndUpdate(req.params.id, function(err, databaseHearsay){
      databaseHearsay.save(function(err){
        res.json({hearsay: databaseHearsay});
      });
    });
});

//   Hearsay.findByIdAndUpdate(req.params.id, req.body.hearsay, {new:true}, function(err, hearsay){
//     res.json(hearsay);
//   });
// });

// DELETE
router.delete('/:id', function(req, res){
  Hearsay.findByIdAndRemove(req.params.id, function(err){
    if(err){ res.status(500).end(); };
    res.status(204).end();
  });
});

// Export module
module.exports = router;
