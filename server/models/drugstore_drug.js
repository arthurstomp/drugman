
'use strict'
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var DrugstoreDrugSchema = new Schema({
  stock: {type: Number, default: 0},
  price: {type: Number, default: 0.0},
  drugstoreId: {type: Schema.Types.ObjectId,
                ref: 'Drugstore',
                required: true},
  drugId: {type: Schema.Types.ObjectId,
           ref: 'Drug',
           required:true},
});

module.exports = mongoose.model('DrugstoreDrug', DrugstoreDrugSchema);
