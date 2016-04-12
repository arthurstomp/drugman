'use strict'
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var DrugSchema = new Schema({
  name: {type: String, required: true},
});

module.exports = mongoose.model('Drug',DrugSchema);
