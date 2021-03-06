var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();
var db = require('../database/database.js');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');
  res.header('Access-Control-Expose-Headers', 'token');

  next();
});

app.use('/',routes);

app.use(express.static(__dirname+'/../client'));

app.listen(PORT,function(){
  console.log('listening on port ', PORT);
});
