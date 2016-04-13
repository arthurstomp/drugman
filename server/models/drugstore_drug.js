
'use strict'
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// Schema. Defina attributes that will be persisted.
var DrugstoreDrugSchema = new Schema({
  stock: {type: Number, default: 0},
  price: {type: Number, default: 0.0},
  // Relationship one-to-one with Drugstore.
  drugstore: {type: Schema.Types.ObjectId,
                ref: 'Drugstore',
                required: true},
  // Relationship one-to-one with Drug.
  drug: {type: Schema.Types.ObjectId,
           ref: 'Drug',
           required:true},
});

// Export model.
module.exports = mongoose.model('DrugstoreDrug', DrugstoreDrugSchema);
