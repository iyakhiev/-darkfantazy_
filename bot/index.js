let Cheat = require('./cheat'),
	express = require('express'),
	path = require('path'),
	config = { port: 1488 },
	app = express();


app.use(express.static(path.join(__dirname, '/app')));
app.listen(process.env.PORT || config.port, function() {
	console.log('on air');
});


let cheat = null;


app.get('/status', function(req, res) {
	res.send(cheat ? cheat.executing : false);
});


app.get('/start', function(req, res) {
	try {
		if (cheat === null) {
			cheat = new Cheat({name: 'darkfantazy_', password: 'dark_fantazy__030193'}, 5);
		} else {
			cheat = null;
		}

		res.send(cheat !== null);
	} catch (e) {
		res.send(e);
	}
});

app.get('/messages', function(req, res) {
	res.send(cheat ? {
		status: true,
		messages: cheat.getMessages()
	} : {
		status: false,
		messages: []
	});
});