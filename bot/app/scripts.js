$(document).ready(() => {
	let bot_data = {
		status: false,
		messages: [],

		start: () => {
			$.ajax({
				url: 'start',
				success: (data) => {
					console.log('start', data);

					bot_data.setStatus(data);
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

					bot_data.setStatus(data);
				},
				error: (data) => {
					console.log('error', data);
				}
			});
		},
		setStatus: (status) => {
			if (status) {
				$('.badge-success').show();
				$('.badge-danger').hide();
			} else {
				$('.badge-success').hide();
				$('.badge-danger').show();
			}
		},
		loadMessages: () =>{
			$.ajax({
				url: 'messages',
				success: (data) => {
					console.log('loadMessages', data);

					if (data && 'status' in data && data.status) {
						bot_data.messages = data.messages;
						bot_data.renderMessages();
						bot_data.setStatus(true);
					} else {
						bot_data.setStatus(false);
					}
				},
				error: (data) => {
					console.log('error', data);
				}
			});
		},
		renderMessages: (errors) => {
			$('.messages tbody').html('');

			let n = 1;
			bot_data.messages.forEach((message, i) => {
				if (errors && message.type == 'error' || !errors) {
					message.n = n++;
					message.class = message.type == 'error' ? 'table-danger' : '';

					let template = $('#message').html();
					Mustache.parse(template);   // optional, speeds up future uses
					let rendered = Mustache.render(template, message);
					$('.messages tbody').prepend(rendered);
				}
			});
		}
	};

	bot_data.refreshStatus();
	bot_data.loadMessages();

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

	$('.start_bot').on('click', () => {
		bot_data.start();
	});
});