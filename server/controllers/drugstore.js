'use strict'
var express = require('express'),
    router  = express.Router();

// Drugstore CRUD
router.get('/',function(req, res){
  console.log('GET list Drugstore');
  res.end();
});

router.get('/:id',function(req, res){
  var id = req.params['id'];
  console.log('GET Drugstore id = '+id);

});

router.post('/',function(req, res){
  console.log('POST create Drugstore');
});

router.put('/:id',function(req, res){
  var id = req.params['id'];
  console.log('PUT update Drugstore id = '+id);
});

router.delete('/:id', function(req, res){
  var id = req.params['id'];
  console.log('DELETE Drugstore id = '+id);
});

// Routes to access drug from a Drugstore
router.get('/:ds/drug',function(req, res){
  var drugstoreId = req.params['ds'];
  console.log('GET list of all drugs from drugstore('+drugstoreId+')');
});

router.get('/:ds/drug/:id',function(req, res){
  var drugstoreId = req.params['ds'],
      drugId      = req.params['id'];
  console.log('GET drug('+drugId+') from drugstore('+drugstoreId+')');
});

router.post('/drug',function(req, res){
  var drugstoreId = 1,
      drugId = 2;
  console.log('POST create or increment stock of drug('+drugId+')'+
              ' at drugstore('+drugstoreId+')');
});

router.put('/drug', function(req, res){
  var drugstoreId = 1,
      drugId = 2;
  console.log('PUT update drug('+drugId+') at drugstore('+drugstoreId+')');
});

router.delete('/drug', function(req, res){
  var drugstoreId = 1,
      drugId = 2;
  console.log('DELETE drug('+drugId+') from drugstore('+drugstoreId+')');
});

module.exports = router;
