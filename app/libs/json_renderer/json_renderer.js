(function () {
	let plus_icon = '<i class="fa fa-plus-square" aria-hidden="true"></i>';
	let minus_icon = '<i class="fa fa-minus-square" aria-hidden="true"></i>';
	let folder_icon = '<i class="fa fa-folder-open" aria-hidden="true"></i>';
	let file_icon = '<i class="fa fa-file" aria-hidden="true"></i>';

	function getValueNodeHTML(key, value, type, fileIcon, toggleIcon, folderIcon, line) {
		return `<div class='jr_node_wrapper jr_` + type + `'>
					<div class='jr_node_key_wrapper'>
						` + (toggleIcon ? plus_icon + minus_icon : '') + `
						` + (folderIcon ? folder_icon : '') + `
						` + (fileIcon ? file_icon : '') + `
						` + key + `
						<span class="jr_colon">:</span>
					</div>
					<div class='jr_node_value_wrapper'>
						` + (line ? '<div class="jr_node_line"></div>' : '') + `
						<div class='jr_node_values'>
							` + value + `
						</div>
					</div>
				</div>`;
	}

	function parseObject(obj) {
		try {
			let content = '';

			if (typeof obj === 'object') {
				for (let key in obj) {
					if (obj.hasOwnProperty(key)) {
						if (typeof obj[key] === 'object' && obj[key] !== null) {
							if (Array.isArray(obj[key])) {
								if (obj[key].length > 0) {
									content += getValueNodeHTML(key, (() => {
										let temp_content = '';

										obj[key].forEach((v, i) => {
											if (typeof v === 'object') {
												temp_content += getValueNodeHTML(i, parseObject(v), 'array', false, true, false, true);
											} else {
												temp_content += getValueNodeHTML(i, v, 'value', false, false, false, false);
											}
										});

										return temp_content;
									})(), 'array', false, true, true, true);
								}
							} else {
								content += getValueNodeHTML(key, parseObject(obj[key]), 'object', false, true, true, true);
							}
						} else {
							content += getValueNodeHTML(key, obj[key], 'value', true, false, false, false);
						}
					}
				}

				return content;
			} else {
				return "<div class='jr_node_value_wrapper'>" + obj + '</div>';
			}
		} catch (e) {
			throw new Error('JSONRenderer: error while parsing');
		}
	}

	let methods = {
		init: function () {
			this.element = this;

			if (typeof this.element === 'string') {
				this.element = document.querySelector(this.element);
			}
			if (!(this.element && this.element.nodeType !== null)) {
				throw new Error('Invalid JSONRenderer element');
			}
			// if (this.element.json_renderer) {
			// 	throw new Error('JSONRenderer already attached');
			// }

			this.data = arguments[0][0] || {};

			if (this.data.onnode) {
				let function_type = this.data.onnode_function || 'click';
				$(this.element)
					.off(function_type, '.jr_node_key_wrapper')
					.on(function_type, '.jr_object > .jr_node_key_wrapper, .jr_array > .jr_node_key_wrapper', this.data.onnode);
			}
			if (this.data.onvalue) {
				let function_type = this.data.onvalue_function || 'click';
				$(this.element)
					.off(function_type, '.jr_value')
					.on(function_type, '.jr_value', this.data.onvalue);
			}

			this.element.json_renderer = this;

			$(this.element)
				.off('click', '.jr_object > .jr_node_key_wrapper, .jr_array > .jr_node_key_wrapper')
				.on('click', '.jr_object > .jr_node_key_wrapper, .jr_array > .jr_node_key_wrapper', (e) => {
					$(e.currentTarget).toggleClass('jr_closed');
				});
		},
		destroy: function() {
			if (this.element) {
				$(this.element).off('click', '.jr_object > .jr_node_key_wrapper, .jr_array > .jr_node_key_wrapper');
				this.element = null;
			}
		},
		refreshData: function(data) {
			if (!this.element.json_renderer) {
				throw new Error('JSONRenderer is not inited');
			}

			$(this.element).html('');
			if (data) $(this.element).html('<div class="jr_data_wrapper">' + parseObject(data) + '</div>');
		}
	};

	if (typeof jQuery !== "undefined" && jQuery !== null) {
		jQuery.fn.JSONRenderer = function (method) {
			let args = arguments;

			return this.each(function () {
				if (methods[method]) {
					return methods[method].apply(this, Array.prototype.slice.call(args, 1));
				} else if (typeof method === 'object' || !method) {
					return methods.init.call(this, args);
				} else {
					throw new Error('There is no ' + method + ' method!');
				}
			});
		};
	}


	$('.response_wrapper').JSONRenderer('destroy');
	$('.gis_response').JSONRenderer();
	$('.gis_response').JSONRenderer('refreshData', r.body.result);
}).call(this);