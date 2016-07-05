// Create a production server with ExpressJS and add a new file at the root directory

var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();
app.use(compression());
// serve our static content and files like style.css
app.use(express.static(path.join(__dirname, 'public')));
// send all requests to index.html so browserHistory in React Router works
app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});
