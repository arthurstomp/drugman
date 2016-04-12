var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    drugstoreCtrl = require('./controllers/drugstore.js'),
    drugCtrl = require('./controllers/drug.js'),
    seed = require('./seed.js');

// Set middleware to be used.
// Parse request body to json.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set public folder.
app.use(express.static('../client'));

// Connect with db with default config.
mongoose.connect('mongodb://localhost/drugman');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log("Connection with db is open.");
});

// Seed db.
seed();

// Middleware used in every request.
app.use(function timelog(req, res, next){
  console.log("Time : "+Date.now());
  next();
});

// Set routes started with /drugstore.
app.use('/drugstore',drugstoreCtrl);
// Set routes started with /drug.
app.use('/drug',drugCtrl);

// Start server.
app.listen(3000, function(){
  console.log("Listening at port 3000");
});
