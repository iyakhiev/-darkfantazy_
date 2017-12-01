let Client = require('../client/v1');


let device = new Client.Device('darkfantazy');
let storage = new Client.CookieFileStorage(__dirname + '/cookies/darkfantazy.json');


let session = new Client.Session(device, storage);

new Client.AccountEmailCreator(session)
	.setEmail('darkfantazy69@gmail.com')
	.setUsername('yourdarkfantazy')
	.setPassword('darkfantazy69_030193')
	.setName('Dark Fantazy')
	.register()
	.spread(function(account, discover) {
		// account instanceof Client.Account
		console.log("Created Account", account);
		console.log("Discovery Feed", discover);
	});