$(document).ready(() => {
	let bot_data = {
		account: 'darkfantazy_',
		likes: 0,
		status: false,
		messages: [],
		pull_time: 1000 * 60,

		start: () => {
			$.ajax({
				url: 'start',
				success: (data) => {
					console.log('start', data);

					if (data && 'status' in data) {
						bot_data.likes = Math.round(data.likes + 1);
						bot_data.setStatus(data.status);
					} else {
						bot_data.setStatus(false);
					}
				},
				error: (data) => {
					console.log('error', data);
				}
			});
		},
		refreshStatus: () => {
			$.ajax({
				url: 'status',
				success: (data) => {
					console.log('refreshStatus', data);

					if (data && 'status' in data) {
						bot_data.likes = Math.round(data.likes + 1);
						bot_data.setStatus(data.status);
					} else {
						bot_data.setStatus(false);
					}
				},
				error: (data) => {
					console.log('error', data);
				}
			});
		},
		setStatus: (status) => {
			bot_data.status = status;
			if (status) {
				$('.badge-success').show();
				$('.badge-danger').hide();
			} else {
				$('.badge-success').hide();
				$('.badge-danger').show();
			}
		},
		loadMessages: () => {
			$.ajax({
				url: 'messages',
				success: (data) => {
					console.log('loadMessages', data);

					if (data && 'status' in data) {
						bot_data.messages = data.messages;
						bot_data.renderMessages();
						bot_data.setStatus(data.status);
					} else {
						bot_data.setStatus(false);
					}
				},
				error: (data) => {
					console.log('error', data);
				}
			});
		},
		pullMessages: () => {
			setInterval(() => {
				if (bot_data.status) {
					bot_data.loadMessages();
				}
			}, bot_data.pull_time);
		},
		renderMessages: (errors) => {
			$('.messages tbody').html('');

			let n = 0;
			bot_data.messages.forEach((message, i) => {
				if (errors && message.type == 'error' || !errors) {
					message.n = ++n;
					message.class = message.type == 'error' ? 'table-danger' : '';

					let template = $('#message').html();
					Mustache.parse(template);   // optional, speeds up future uses
					let rendered = Mustache.render(template, message);
					$('.messages tbody').prepend(rendered);
				}
			});

			$('.messages_header .n').html(n);
		},
		loadLiked: () => {
			$.ajax({
				url: 'liked',
				success: (data) => {
					console.log('loadLiked', data);

					if (data && 'status' in data) {
						bot_data.setLikes(data.liked);
						bot_data.setStatus(data.status);
					} else {
						bot_data.setStatus(false);
					}
				},
				error: (data) => {
					console.log('error', data);
				}
			});
		},
		pullLiked: () => {
			setInterval(() => {
				if (bot_data.status) {
					bot_data.loadLiked();
				}
			}, bot_data.pull_time);
		},
		setLikes: (liked) => {
			let title = liked + ' / ' + bot_data.likes;

			$('.liked').html(title);
			document.title = bot_data.account + " [" + title + "]";
		}
	};

	$('.account').html(bot_data.account);

	bot_data.refreshStatus();
	bot_data.pullMessages();
	bot_data.pullLiked();

	$('.ms_show_all').on('click', () => {
		bot_data.renderMessages();
	});

	$('.ms_show_errors').on('click', () => {
		bot_data.renderMessages(true);
	});

	$('.ms_refresh').on('click', () => {
		bot_data.loadMessages();
	});

	$('.refresh_status').on('click', () => {
		bot_data.refreshStatus();
	});

	$('.refresh_likes').on('click', () => {
		bot_data.loadLiked();
	});

	$('.start_bot').on('click', () => {
		bot_data.start();
	});
});