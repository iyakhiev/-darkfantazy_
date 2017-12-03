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

// let account = {name: 'luke_skyproger', password: '03ch01me93go'};
let account = {name: 'darkfantazy_', password: 'dark_fantazy__030193'};
let likes = 1000;
let testing = false;

let errors = [];

app.get('/status', function(req, res) {
	res.send({
		status: cheat && cheat.executing,
		likes: cheat ? cheat.likes : 0,
		account: account.name
	});
});

app.get('/start', function(req, res) {
	try {
		if (cheat && cheat.executing) {
			cheat.stop();
		} else {
			cheat = new Cheat(account, likes, testing);
		}

		res.send({
			status: cheat && cheat.executing,
			likes: cheat ? cheat.likes : 0
		});
	} catch (e) {
		res.send(e);
	}
});

app.get('/messages', function(req, res) {
	let messages = [];

	if (cheat && cheat.getMessages().length) {
		messages = cheat.getMessages();
		messages.forEach((message) => {
			if (message.type == 'error') {
				let found = false;

				for (let error of errors) {
					if (error.timestamp === message.timestamp) {
						found = true;
						break;
					}
				}

				if (!found) errors.push(message);
			}
		});
	}

	res.send({
		status: cheat && cheat.executing,
		messages: messages,
		errors: errors
	});
});

app.get('/liked', function(req, res) {
	res.send(cheat ? {
		status: cheat.executing,
		liked: cheat.getLiked()
	} : {
		status: false,
		liked: 0
	});
});

app.all('*', function(req, res) {
    res.redirect("/");
});