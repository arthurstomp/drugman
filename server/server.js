var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    drugstoreCtrl = require('./controllers/drugstore.js'),
    drugCtrl = require('./controllers/drug.js'),
    seed = require('./seed.js');

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

app.use('/drugstore',drugstoreCtrl);
app.use('/drug',drugCtrl);

app.listen(3000, function(){
  console.log("Listening at port 3000");
});
