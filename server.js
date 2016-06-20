var express = require('express');
var app = express();
var serveStatic = require('serve-static');
app.use(serveStatic(__dirname)).listen(8080, function() {
  console.log(('Server running on port 8080...'));
});
