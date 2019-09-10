var express = require('express');
var app = express();

let abcd = "BHUPA"

app.get('/', function (req, res) {
	let q = "XXX"
	if(q == 'xxx') {
		
	}
	res.send("Hello World");
});

app.get('/test', function (req, res) {
	res.send("Hello TEST");
});

app.listen(4050);