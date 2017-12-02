let Client = require('./client/v1');
let async = require('async');

class Cheat {
	constructor(account, likes, testing) {
		this.liked = 0;
		this.account = account;
		this.likes = Cheat.getLikesN(likes);
		this.testing = testing;

		this.addMessage('Start', {
			account: this.account,
			likes: this.likes
		});

		this.device = new Client.Device(this.account.name);
		this.storage = new Client.CookieFileStorage(__dirname + '/cookies/' + this.account.name + '.json');
		this.session = Client.Session.create(this.device, this.storage, this.account.name, this.account.password);

		this.cheating();
	}

	cheating() {
		this.executing = true;

		async.eachSeries(likeType, (type, cb) => {
			if (!this.executing) return cb('stop');
			if (this.liked > this.likes) return cb('enough');
			if (type.type in this) {
				this[type.type](type, cb);
			} else {
				this.addMessage('Cheating: wrong type', type, true);
				cb();
			}
		}, (err) => {
			if (!err && this.liked < this.likes) {
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
		let _t = this;

		if (this.testing) {
			this.addMessage('Like by location', {
				type: location,
				liked: this.liked
			});

			if (!_t.executing) return cb('stop');
			if (_t.liked > _t.likes) return cb('enough');
			this.liked++;
			setTimeout(cb, 1000);
		} else {
			try {
				_t.session.then(function (session) {
					return [session, new Client.Feed.LocationMedia(session, location.id, 100)];
				}).spread(function (session, result) {
					result.get().then((posts) => {
						_t.addMessage('Like by location', {
							type: location,
							liked: _t.liked,
							length: posts.length
						});
						_t.setLikes(session, posts, (err) => {
							cb(err);
						});
					});
				});
			} catch (e) {
				this.addMessage(e.toString(), {
					function: 'likeByLocation',
					data: location
				}, true);
				cb();
			}
		}
	}

	likeByTag(tag, cb) {
		let _t = this;

		if (this.testing) {
			this.addMessage('Like by tag', {
				type: tag,
				liked: this.liked
			});

			if (!_t.executing) return cb('stop');
			if (_t.liked > _t.likes) return cb('enough');
			this.liked++;
			setTimeout(cb, 1000);
		} else {
			try {
				_t.session.then(function (session) {
					return [session, new Client.Feed.TaggedMedia(session, tag.tag, 100)];
				}).spread(function (session, result) {
					result.get().then((posts) => {
						_t.addMessage('Like by tag', {
							type: tag,
							liked: _t.liked,
							length: posts.length
						});
						_t.setLikes(session, posts, (err) => {
							cb(err);
						});
					});
				});
			} catch (e) {
				this.addMessage(e.toString(), {
					function: 'likeByTag',
					data: tag
				}, true);
				cb();
			}
		}
	}

	setLikes(session, posts, cb) {
		let _t = this;

		try {
			async.eachSeries(posts, (post, inner_cb) => {
				try {
					if (!this.executing) return cb('stop');
					if (this.liked > this.likes) return cb('enough');

					let r = random.getTime();

					setTimeout(() => {
						Client.Like.create(session, post.id).then((like_result) => {
							if (like_result && like_result.name && like_result.name === 'ActionSpamError') {
								return inner_cb('ActionSpamError');
							}

							_t.liked++;
							inner_cb(null);
						});
					}, r)
				} catch (e) {
					this.addMessage(e.toString(), {
						function: 'setLikes.2',
						data: posts
					}, true);
					return cb();
				}
			}, function (err) {
				cb(err);
			});
		} catch (e) {
			this.addMessage(e.toString(), {
				function: 'setLikes',
				data: posts
			}, true);
			cb();
		}
	}

	addMessage(message, data, error) {
		if (!this.messages) this.messages = [];

		let date = new Date();

		this.messages.push({
			// type: this.messages.length % 2 == 0 ? 'error' : 'info',
			type: error ? 'error' : 'info',
			data: JSON.stringify(data),
			message: message,
			time: date.toLocaleString('ru'),
			timestamp: date.getTime()
		});
	}

	getMessages() {
		return this.messages ? this.messages : [];
	}

	getLiked() {
		return this.liked ? this.liked : 0;
	}

	static getLikesN(n) {
		return n + Math.random() * (n + 100 - n);
	}
}

const random = {
	random_min_time: 25000,
	random_max_time: 35000,

	getTime: () => {
		return random.random_min_time + Math.random() * (random.random_max_time - random.random_min_time);
	}
};

const likeType = [
	{
		type: 'likeByLocation',
		name: 'russia',
		id: 413780647
	},
	{
		type: 'likeByLocation',
		name: 'moscow',
		id: 17326249
	},
	{
		type: 'likeByLocation',
		name: 'moscow_region',
		id: 228339195
	},
	{
		type: 'likeByLocation',
		name: 'petersburg',
		id: 213174824
	},
	{
		type: 'likeByLocation',
		name: 'krasnodar',
		id: 894812510
	},
	{
		type: 'likeByTag',
		tag: 'like4like'
	},
	{
		type: 'likeByLocation',
		name: 'russia',
		id: 413780647
	},
	{
		type: 'likeByLocation',
		name: 'moscow',
		id: 17326249
	},
	{
		type: 'likeByLocation',
		name: 'moscow_region',
		id: 228339195
	},
	{
		type: 'likeByLocation',
		name: 'petersburg',
		id: 213174824
	},
	{
		type: 'likeByLocation',
		name: 'krasnodar',
		id: 894812510
	},
	{
		type: 'likeByTag',
		tag: 'nature'
	}];

module.exports = Cheat;