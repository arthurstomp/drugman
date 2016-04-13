'use strict'
var express = require('express'),
    router  = express.Router(),
    mongoose = require('mongoose'),
    Drugstore = require('../models/drugstore.js'),
    DrugstoreDrug = require('../models/drugstore_drug.js'),
    Drug = require('../models/drug.js');

// Drugstore CRUD
// List all drugstores.
router.get('/',function(req, res){
  console.log('GET list Drugstore');
  Drugstore.find(function(err, drugstores){
    if(err){
      res.send(err);
    }
    res.json(drugstores);
  });
});

// Show drugstore with :id.
router.get('/:id',function(req, res){
  var id = req.params['id'];
  console.log('GET Drugstore id = '+id);
  Drugstore.find({_id: id},function(err, drugstore){
    if(err){
      res.send(err);
    }
    res.json(drugstore);
  });

});

// Create new drugstore.
router.post('/',function(req, res){
  console.log('POST create Drugstore');
  var drugstoreName = req.body.name;
  Drugstore.create({name: drugstoreName},function(err){
    if(err){
      res.send(err);
    }
    res.json({message: 'Drugstore created'});
  })
});

// Update drugstore with id.
router.put('/',function(req, res){
  var id = req.body._id,
      name = req.body.name;
  Drugstore.update(
    {_id: id},
    {name: name},
    function(err){
      if (err) {
        res.send(err);
      }
      res.json({message: 'Drugstore Successfully updated'});
    }
  )
  console.log('PUT update Drugstore id = '+id);
});

// Delete drugstore with :id.
router.delete('/:id', function(req, res){
  var id = req.params['id'];
  console.log('DELETE Drugstore id = '+id);
  Drugstore.remove({_id: id}, function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "Successfully deleted"});
  })
});

// Routes to access drug from a Drugstore.
// CRUD DrugstoreDrug.
// List all drugstore-drugs from :ds drugstore.
router.get('/:ds/drug',function(req, res){
  var drugstoreId = req.params['ds'];
  console.log('GET list of all drugs from drugstore('+drugstoreId+')');
  DrugstoreDrug.find({drugstore: drugstoreId}).populate('drug').exec(function(err, drugstoreDrugs){
    if (err) {
      res.send(err);
    }
    res.json(drugstoreDrugs);
  });
});

// Show drugstore-drug from :ds drugstore with :id.
router.get('/:ds/drug/:id',function(req, res){
  var drugstoreId = req.params['ds'],
      drugId      = req.params['id'];
  console.log('GET drug('+drugId+') from drugstore('+drugstoreId+')');
  DrugstoreDrug.find({drugstore: drugstoreId, drug: drugId}, function(err,dd){
    if(err){
      res.send(err);
    }
    res.json(dd);
  });
});

// Create drugstore-drug
router.post('/drug',function(req, res){
  var drugstoreId = req.body.drugstoreId,
      drugId = req.body.drugId,
      stock = req.body.stock,
      price = req.body.price;
  console.log('POST create or increment stock of drug('+drugId+')'+
              ' at drugstore('+drugstoreId+')');
  DrugstoreDrug.create({
    drugstore: drugstoreId,
    drug: drugId,
    stock: stock,
    price: price,
  },function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "Drugstore-Drug created"});
  })
});

// Update drugstore-drug.
router.put('/drug', function(req, res){
  var drugstoreId = req.body.drugstoreId,
      drugId = req.body.drugId,
      stock = req.body.stock,
      price = req.body.price;
  console.log('PUT update drug('+drugId+') at drugstore('+drugstoreId+')');
  DrugstoreDrug.update(
    {
      drugstore: drugstoreId,
      drug: drugId,
    },
    {
      stock: stock,
      price: price,
    },
    function(err){
      if (err) {
        res.send(err);
      }
      res.json({message: 'DrugstoreDrug Successfully updated'});
    }
  )
});

// Delete drugstore-drug.
router.delete('/:dsid/drug/:id', function(req, res){
  var drugstoreId = req.params['dsid'],
      drugId = req.params['id'];
  console.log('DELETE drug('+drugId+') from drugstore('+drugstoreId+')');
  DrugstoreDrug.remove({
    drugstoreId: drugstoreId,
    drugId: drugId,
  },function(err){
    if (err) {
      res.send(err);
    }
    res.json({message: "Successfully Deleted"});
  })
});

// Export routes.
module.exports = router;
