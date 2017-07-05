'use strict'
var express = require('express');
var app = express();
var path = require('path');

var PORT = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolved(__dirname, 'public', 'index.html'));
})

app.listen(PORT, function() {
  console.log('App running on PORT:', PORT);
})
