var express = require('express'),
    app = express(),
    drugstoreCtrl = require('./controllers/drugstore.js'),
    drugCtrl = require('./controllers/drug.js');


app.use(express.static('../client'));

app.use(function timelog(req, res, next){
  console.log("Time : "+Date.now());
  next();
});

app.get('/',function(req, res){
  console.log('Root');
  res.render('index.html');
});

app.use('/drugstore',drugstoreCtrl);
app.use('/drug',drugCtrl);


app.listen(3000, function(){
  console.log("Listening at port 3000");
});
