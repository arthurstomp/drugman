'use strict'
var express = require('express'),
    router  = express.Router(),
    Drug    = require('../models/drug.js');

// Drug CRUD
// List all drugs.
router.get('/',function(req, res){
  console.log('GET list Drug');

  Drug.find(function(err, drugs){
    if(err){
      res.send(err);
    }
    res.json(drugs)
  });
});

// List drug with :id.
router.get('/:id',function(req, res){
  var id = req.params['id'];
  console.log('GET Drug id = '+id);

  Drug.findById(req.params['id'], function(err, drug){
    if(err){
      res.send(err);
    }
    res.json(drug);
  })
});

// Create drug.
router.post('/',function(req, res){
  console.log('POST create Drug');

  var drugName = req.body.name;

  Drug.create({name: drugName}, function(err){
    if(err){
      res.send(err);
    }

    res.json({message: 'Drug created'});
  });
});

// Update drug with :id.
router.put('/',function(req, res){
  var id = req.body._id,
      name = req.body.name;
  console.log('PUT update Drug id = '+id);

  Drug.update(
    {_id: id},
    {name: name},
    function(err){
      if (err) {
        res.send(err);
      }
      res.json({message: 'Drug successfully updated'});
    }
  )
});

// Delete drug with :id.
router.delete('/', function(req, res){
  var id = req.body._id;
  console.log('DELETE Drug id = '+id);

  Drug.remove({_id: id}, function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "Sucessfully deleted"});
  });
});

module.exports = router;
