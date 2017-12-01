let Client = require('../client/v1');
let async = require('async');

let utils = {};

utils.likeType = [
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

utils.locations_old = {
	russia_id: 413780647,
	moscow_id: 17326249,
	moscow_region_id: 228339195,
	petersburg_id: 213174824,
	krasnodar_id: 894812510
};

utils.random = {
	random_min_time: 25000,
	random_max_time: 35000,

	getTime: () => {
		return utils.random.random_min_time + Math.random() * (utils.random.random_max_time - utils.random.random_min_time);
	},
	getLikesN: (n) => {
		return n + Math.random() * (n + 100 - n);
	}
};

utils.like_posts = (session, posts, liked, max_n, cb) => {
	let l = posts.length;

	console.log('length:', l, 'liked:', liked, '\n');

	async.eachSeries(posts, (post, inner_cb) => {
		try {
			if (liked > max_n) return inner_cb('Enough!');

			let r = utils.random.getTime();

			// console.log('///////////////////////////////////////', '\n liked:', liked, '\nrandom:', r);

			setTimeout(() => {
				// console.log('    id:', post.id, '\n  link:', post._params.webLink);

				Client.Like.create(session, post.id)
					.then(function (like_result) {
						if (like_result && like_result.name && like_result.name === 'ActionSpamError') {
							return inner_cb('ActionSpamError');
						}

						liked++;
						inner_cb(null);
					});
			}, r)
		} catch (e) {
			console.log('Handled error:', e);
		}
	}, function (err) {
		if (err) console.log('\nfinish', err);

		cb(err, liked);
	});
};


module.exports = utils;