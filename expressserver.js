var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('view options', {
	layout: true
});
app.set('views', __dirname + '/views');

console.log(__dirname);

app.get('/stooges/:name?', function(req, res, next) {
	var name = req.params.name;

	switch (name ? name.toLowerCase() : '') {
		case 'larry':
		case 'curly':
		case 'moe':
			// res.send(name + ' is my favorite stooge.');
			res.render('stooges', {
				stooge: name
			});
			break;

		default:
			next();
	}
});

app.get('/stooges/*?', function(req, res) {
	// res.send('no stooges listed');
	res.render('stooges', {
		stooge: null
	});
});

app.get('/?', function(req, res) {
	// res.send('hello world');
	res.render('index');
});

var port = 8005;
app.listen(port);
console.log('Listening on port ' + port);