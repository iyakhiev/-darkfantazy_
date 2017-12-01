let Client = require('../client/v1');
let async = require('async');
let utils = require('./utils');

class Cheat {
	constructor(account, likes) {
		this.liked = 0;
		this.account = account;
		this.likes = Cheat.getLikesN(likes);

		this.addMessage('Start', {
			account: this.account,
			likes: this.likes
		});

		// this.device = new Client.Device(this.account.name);
		// this.storage = new Client.CookieFileStorage(__dirname + '/cookies/' + this.account.name + '.json');
		// this.session = Client.Session.create(this.device, this.storage, this.account.name, this.account.password);

		this.cheating();
	}

	cheating() {
		this.executing = true;

		async.eachSeries(utils.likeType, (type, cb) => {
			if (!this.executing) cb('stop');

			if (type.type in this) {
				this[type.type](type, cb);
			} else {
				this.addMessage('Cheating: wrong type', type, true);

				cb();
			}
		}, (err) => {
			if (this.liked < this.likes) {
				this.cheating();
			} else {
				this.addMessage('Cheating: final callback', err, err != undefined);

				this.executing = false;
			}
		});
	}

	stop() {
		this.executing = false;
	}

	likeByLocation(location, cb) {
		this.addMessage('Like by location', {
			type: location,
			liked: this.liked
		});
		let _t = this;

		if (!this.executing) cb('stop');
		if (this.liked > this.likes) return cb();
		this.liked++;
		setTimeout(cb, 1000);

		// try {
		// 	this.session.then(function (session) {
		// 		return [session, new Client.Feed.LocationMedia(session, location.id, 100)];
		// 	}).spread(function (session, result) {
		// 		result.get().then((posts) => {
		// 			utils.like_posts(session, posts, liked, account.n, (err, liked) => {
		// 				_t.liked = liked;
		//
		// 				if (cb) cb(err, liked);
		// 			});
		// 		});
		// 	});
		// } catch (e) {
		// 	this.addMessage(e.toString(), location, true);
		//
		// 	cb();
		// }
	}

	likeByTag(tag, cb) {
		this.addMessage('Like by tag', {
			type: tag,
			liked: this.liked
		});
		let _t = this;

		if (!this.executing) cb('stop');
		if (this.liked > this.likes) return cb();
		this.liked++;
		setTimeout(cb, 1000);

		// try {
		// 	this.session.then(function (session) {
		// 		return [session, new Client.Feed.TaggedMedia(session, tag.tag, 100)];
		// 	}).spread(function (session, result) {
		// 		result.get().then((posts) => {
		// 			utils.like_posts(session, posts, liked, account.n, (err, liked) => {
		// 				_t.liked = liked;
		//
		// 				this.addMessage('Liked by tag', _t.liked);
		//
		// 				if (cb) cb(err, liked);
		// 			});
		// 		});
		// 	});
		// } catch (e) {
		// 	this.addMessage(e.toString(), tag, true);
		//
		// 	cb();
		// }
	}

	addMessage(message, data, error) {
		if (!this.messages) this.messages = [];

		let date = new Date();

		console.log('hello');

		this.messages.push({
			type: this.messages.length % 2 == 0 ? 'error' : 'info',
			// type: error ? 'error' : 'info',
			data: JSON.stringify(data),
			message: message,
			time: date.toLocaleString('ru'),
			timestamp: date.getTime()
		});
	}

	getMessages() {
		return this.messages ? this.messages : [];
	}

	static getLikesN(n) {
		return n + Math.random() * (n + 100 - n);
	}
}


module.exports = Cheat;