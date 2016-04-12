'use strict'
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    DrugstoreDrug = require('./drugstore_drug.js');

// Schema. Defina attributes that will be persisted.
var DrugstoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

// Cascading delete
// If a Drugstore is delete all of the drugs stored in the drugstore are
// deleted.
DrugstoreSchema.pre('remove',function(next){
  console.log('Drugstore pre remove middleware. Cascade remove DrugstoreDrugs');
  DrugstoreDrug.remove({drugstoreId: this._id}).exec();
  next();
});

// Export model.
module.exports = mongoose.model('Drugstore', DrugstoreSchema);
