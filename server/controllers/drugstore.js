'use strict'
var express = require('express'),
    router  = express.Router(),
    Drugstore = require('../models/drugstore.js'),
    DrugstoreDrug = require('../models/drugstore_drug.js');

// Drugstore CRUD
router.get('/',function(req, res){
  console.log('GET list Drugstore');
  Drugstore.find(function(err, drugstores){
    if(err){
      res.send(err);
    }
    res.json(drugstores);
  });
});

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

router.delete('/', function(req, res){
  var id = req.body._id;
  console.log('DELETE Drugstore id = '+id);
  Drugstore.remove({_id: id}, function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "Successfully deleted"});
  })
});

// Routes to access drug from a Drugstore
router.get('/:ds/drug',function(req, res){
  var drugstoreId = req.params['ds'];
  console.log('GET list of all drugs from drugstore('+drugstoreId+')');
  DrugstoreDrug.find({drugstoreId: drugstoreId}, function(err, drugstoreDrugs){
    if(err){
      res.send(err);
    }
    res.json(drugstoreDrugs);
  });
});

router.get('/:ds/drug/:id',function(req, res){
  var drugstoreId = req.params['ds'],
      drugId      = req.params['id'];
  console.log('GET drug('+drugId+') from drugstore('+drugstoreId+')');
  DrugstoreDrug.find({drugstoreId: drugstoreId, drugId: drugId}, function(err,dd){
    if(err){
      res.send(err);
    }
    res.json(dd);
  });
});

router.post('/drug',function(req, res){
  var drugstoreId = req.body.drugstoreId,
      drugId = req.body.drugId,
      stock = req.body.stock,
      price = req.body.price;
  console.log('POST create or increment stock of drug('+drugId+')'+
              ' at drugstore('+drugstoreId+')');
  DrugstoreDrug.create({
    drugstoreId: drugstoreId,
    drugId: drugId,
    stock: stock,
    price: price,
  },function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "Drugstore-Drug created"});
  })
});

router.put('/drug', function(req, res){
  var drugstoreId = req.body.drugstoreId,
      drugId = req.body.drugId,
      stock = req.body.stock,
      price = req.body.price;
  console.log('PUT update drug('+drugId+') at drugstore('+drugstoreId+')');
  DrugstoreDrug.update(
    {
      drugstoreId: drugstoreId,
      drugId: drugId,
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

router.delete('/drug', function(req, res){
  var drugstoreId = req.body.drugstoreId,
      drugId = req.body.drugId;
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

module.exports = router;
