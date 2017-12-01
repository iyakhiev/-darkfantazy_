let Client = require('../client/v1');
let async = require('async');
let utils = require('./utils');

let account = {
	// name: 'mr_tester_1488', password: 'mr  tester', n: utils.random.getLikesN(500)
	// name: 'iyakhiev', password: 'wouwoupalehcheparen\'', n: utils.random.getLikesN(500)
	// name: 'luke_skyproger', password: '03ch01me93go'
	name: 'darkfantazy_', password: 'dark_fantazy__030193'
};

let liked = 0;

account.n = utils.random.getLikesN(1000);

let device = new Client.Device(account.name);
let storage = new Client.CookieFileStorage(__dirname + '/cookies/' + account.name + '.json');

try {
	let session = Client.Session.create(device, storage, account.name, account.password);

	console.log('Time:', new Date(), 'Likes:', Math.round(account.n), '\n');

	async.series([
		//geo 1
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//like4like 1
		(async_cb) => {
			console.log('Time:', new Date(), 'like4like 1');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'like4like', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 2
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//nature 1
		(async_cb) => {
			console.log('Time:', new Date(), 'nature 1');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'nature', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 3
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//like4like 2
		(async_cb) => {
			console.log('Time:', new Date(), 'like4like 2');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'like4like', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 4
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//nature 2
		(async_cb) => {
			console.log('Time:', new Date(), 'nature 2');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'nature', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 5
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//like4like 3
		(async_cb) => {
			console.log('Time:', new Date(), 'like4like 3');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'like4like', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 6
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//nature 3
		(async_cb) => {
			console.log('Time:', new Date(), 'nature 3');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'nature', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 7
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//like4like 4
		(async_cb) => {
			console.log('Time:', new Date(), 'like4like 4');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'like4like', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 8
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//nature 4
		(async_cb) => {
			console.log('Time:', new Date(), 'nature 4');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'nature', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 9
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//like4like 5
		(async_cb) => {
			console.log('Time:', new Date(), 'like4like 5');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'like4like', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 10
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//nature 5
		(async_cb) => {
			console.log('Time:', new Date(), 'nature 5');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'nature', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 11
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//like4like 6
		(async_cb) => {
			console.log('Time:', new Date(), 'like4like 6');
			session.then(function (session) {
				return [session, new Client.Feed.TaggedMedia(session, 'like4like', 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
		//geo 12
		(async_cb) => {
			console.log('Time:', new Date(), 'russia_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.russia_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'moscow_region_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.moscow_region_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'petersburg_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.petersburg_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		}, (async_cb) => {
			console.log('Time:', new Date(), 'krasnodar_id');
			session.then(function (session) {
				return [session, new Client.Feed.LocationMedia(session, utils.locations_old.krasnodar_id, 100)];
			}).spread(function (session, result) {
				result.get().then((posts) => {
					utils.like_posts(session, posts, liked, account.n, (err, liked2) => {
						liked = liked2;

						async_cb(err);
					});
				});
			});
		},
	], function (err) {
		console.log('\n\nfinal finish', err);

		console.log('\nFinish time', new Date());
	});
} catch (e) {
	console.log('Global error', e);
}