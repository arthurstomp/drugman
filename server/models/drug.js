'use strict'
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    DrugstoreDrug = require('./drugstore_drug.js');

// Schema. Defina attributes that will be persisted.
var DrugSchema = new Schema({
  name: {type: String, required: true},
});

// Cascading delete
// If a Drug is delete all of the drugs of that type stored in drugstores are
// deleted.
DrugSchema.pre('remove',function(next){
  console.log('Drug pre remove middleware. Cascade remove DrugstoreDrugs');
  DrugstoreDrug.remove({drug: this._id}).exec();
  next();
});

// Export model.
module.exports = mongoose.model('Drug',DrugSchema);
