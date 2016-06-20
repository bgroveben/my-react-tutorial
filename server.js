// https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
// Oh yeah, the ExpressJS docs helped too http://expressjs.com/en/starter/static-files.html
var express = require('express');
var app = express();
app.use(express.static(__dirname)).listen(8080, function() {
  console.log(('Server running on port 8080...'));
});
