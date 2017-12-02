let express = require('express'),
	Cheat = require('./cheat'),
    app = express(),
    path = require('path'),
    port = 1488;

app.use(express.static(path.join(__dirname, '../app')));
app.listen(process.env.PORT || port, function() {
    console.log('on air');
});


let cheat = null;

app.get('/status', function(req, res) {
	res.send(cheat ? cheat.executing : false);
});

app.get('/start', function(req, res) {
	try {
		if (cheat && cheat.executing) {
			cheat.stop();
		} else {
			cheat = new Cheat({name: 'darkfantazy_', password: 'dark_fantazy__030193'}, 5);
		}

		res.send(cheat && cheat.executing);
	} catch (e) {
		res.send(e);
	}
});

app.get('/messages', function(req, res) {
	res.send(cheat ? {
		status: cheat.executing,
		messages: cheat.getMessages()
	} : {
		status: false,
		messages: []
	});
});

app.all('*', function(req, res) {
    res.redirect("/");
});