var express = require('express'),
    app = express();

app.get('/',function(req, res){
  res.send('DrugMan');
});

app.listen(3000, function(){
  console.log("Listening at port 3000");
});
