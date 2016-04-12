'use strict'

var Drug = require('./models/drug.js'),
    Drugstore = require('./models/drugstore.js'),
    DrugstoreDrug = require('./models/drugstore_drug.js');

// Simple callback to save operations.
function createCallback(err){
  if (err) {
    console.log(err);
  }
  console.log("Creation sucessful");
}

// Clean db.
function clean(){
  // Remove all drugstores.
  Drugstore.remove(function(err){
    if(err){
      console.log(err);
    }
    console.log("Drugstores has been succcessfully deleted");
  });

  // Remove all drugs.
  Drug.remove(function(err){
    if (err) {
      console.log(err);
    }
    console.log("Drugs has been Successfully deleted");
  });

  // Remove all drugstore-drugs.
  DrugstoreDrug.remove(function(err){
    if(err){
      console.log(err);
    }
    console.log("DrugstoreDrugs has been succcessfully deleted");
  });
}

function seed(){

  // Cleaning database
  clean();

  // Create drugstores
  var drogasil = new Drugstore({name: 'Drogasil'}),
      menorPreco = new Drugstore({name: 'Menor Preço'});

  // Create Drugs
  var neosoro = new Drug({name: 'Neosoro'}),
      puran = new Drug({name: 'Puran t4'}),
      salonpas = new Drug({name: 'Salonpas'}),
      cliclo = new Drug({name: 'Cliclo 21'}),
      microvlar = new Drug({name: 'Microvlar'}),
      buscopan = new Drug({name: 'Buscopan'}),
      rivotril = new Drug({name: 'Rivotril'}),
      dorflex = new Drug({name: 'Dorflex'});

  // Create DrugstoreDrugs.
  var drogd1 = new DrugstoreDrug({
        drugstoreId: drogasil._id,
        drugId: neosoro._id,
        stock: 100,
        price: 10.0,
      }),
      drogd2 = new DrugstoreDrug({
        drugstoreId: drogasil._id,
        drugId: salonpas._id,
        stock: 10,
        price: 20.0,
      });

  // Save models into db.
  drogasil.save(createCallback);
  menorPreco.save(createCallback);

  neosoro.save(createCallback);
  puran.save(createCallback);
  salonpas.save(createCallback);
  cliclo.save(createCallback);
  microvlar.save(createCallback);
  buscopan.save(createCallback);
  rivotril.save(createCallback);
  dorflex.save(createCallback);

  drogd1.save(createCallback);
  drogd2.save(createCallback);
}

// Export seed function.
module.exports = seed;
