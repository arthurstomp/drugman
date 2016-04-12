'use strict'
var express = require('express'),
    router  = express.Router();

// Drug CRUD
router.get('/',function(req, res){
  console.log('GET list Drug');
});

router.get('/:id',function(req, res){
  var id = req.params['id'];
  console.log('GET Drug id = '+id);

});

router.post('/',function(req, res){
  console.log('POST create Drug');
});

router.put('/:id',function(req, res){
  var id = req.params['id'];
  console.log('PUT update Drug id = '+id);
});

router.delete('/:id', function(req, res){
  var id = req.params['id'];
  console.log('DELETE Drug id = '+id);
});

module.exports = router;
