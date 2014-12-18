var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
        //res.send('MetLife Tests #3');
        //comment ewr
});

app.listen(process.env.PORT || 433);
 //5000
module.exports = app;

