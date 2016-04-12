'use strict'
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var DrugstoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Drugstore', DrugstoreSchema);
