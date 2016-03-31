var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello, chris! this is cool!');
  res.render('index.html');
});

app.listen(process.env.PORT || 3000);
