var express = require('express');
var app = express();

app.get('/',function(req,res){

   res.send('server runing');
});

app.listen(8000);
console.log('server runing at 8000');
