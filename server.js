var path = require('path');
var express = require('express');
var app = express();

app.listen(8080, function() {
	console.log('listening at 8080');
});
app.use('/', express.static(path.join(__dirname, '/')));
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/', express.static(path.join(__dirname, '/angular')));