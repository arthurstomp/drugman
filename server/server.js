var express = require('express'),
    app = express(),
    router = express.Router(),
    drugstoreCtrl = require('./controllers/drugstore.js'),
    drugCtrl = require('./controllers/drug.js');


app.use(express.static('../client'));

router.use(function timelog(req, res, next){
  console.log("Time : "+Date.now());
  next();
});

router.get('/',function(req, res){
  res.render('index.html');
});

router.use('/drugstore',drugstoreCtrl);
router.use('/drug',drugCtrl);

app.use(router);

app.listen(3000, function(){
  console.log("Listening at port 3000");
});
