var _getDef = function() {
	return {
		'selectedMode' : 1,
		'indexMode' : 0,
		'searchEngines' : [{
					id : 0
				}, {
					id : 1
				}, {
					id : 11
				}, {
					id : 3
				}]
	};
};

var _show_search_yadng_zone = function(_i, _img) {
	var _zone = $('#search_engine_zone_' + _i);
	if (_zone) {
		_zone.css('background-image', 'url("' + _img + '")');
	}
	var _input = $('#search_engine_url_' + _i);
	if (_input) {
		_input.css('background-image', 'url("' + _img + '")');
	}
};

var _build_in_seach_engines = [{
			'id' : 0,
			'name' : 'Wikipedia',
			'favicon' : './favicon/wikipedia.ico',
			'url' : 'http://en.wikipedia.org/wiki/%s'
		}, {
			'id' : 1,
			'name' : 'Google',
			'favicon' : './favicon/google.ico',
			'url' : 'https://www.google.com/search?hl=en&q=%s'
		}, {
			'id' : 2,
			'name' : 'Douban',
			'favicon' : './favicon/douban.ico',
			'url' : 'http://www.douban.com/search?q=%s'
		}, {
			'id' : 3,
			'name' : 'Twitter',
			'favicon' : './favicon/twitter.ico',
			'url' : 'https://twitter.com/search?q=%s'
		}, {
			'id' : 4,
			'name' : 'Bing',
			'favicon' : './favicon/bing.ico',
			'url' : 'http://www.bing.com/search?setmkt=en-US&q=%s'
		}, {
			'id' : 5,
			'name' : 'Taobao',
			'favicon' : './favicon/taobao.ico',
			'url' : 'http://s.taobao.com/search?q=%s'
		}, {
			'id' : 6,
			'name' : 'Shooter',
			'favicon' : './favicon/shooter.ico',
			'url' : 'http://www.shooter.cn/search2/%s'
		}, {
			'id' : 7,
			'name' : 'Amazon',
			'favicon' : './favicon/amazon.ico',
			'url' : 'http://www.amazon.com/s/field-keywords=%s'
		}, {
			'id' : 8,
			'name' : 'Delicious',
			'favicon' : './favicon/delicious.ico',
			'url' : 'https://delicious.com/search/%s'
		}, {
			'id' : 9,
			'name' : 'Flickr',
			'favicon' : './favicon/flickr.ico',
			'url' : 'http://www.flickr.com/search/?q=%s'
		}, {
			'id' : 10,
			'name' : 'Technorati',
			'favicon' : './favicon/technorati.ico',
			'url' : 'http://technorati.com/search?return=posts&authority=high&q=%s'
		}, {
			'id' : 11,
			'name' : 'Youtube',
			'favicon' : './favicon/youtube.ico',
			'url' : 'https://www.youtube.com/results?search_query=%s'
		}, {
			'id' : 12,
			'name' : 'Ebay',
			'favicon' : './favicon/ebay.ico',
			'url' : 'http://www.ebay.com/sch/i.html?_nkw=%s'
		}, {
			'id' : 13,
			'name' : 'IMDB',
			'favicon' : './favicon/imdb.ico',
			'url' : 'http://www.imdb.com/find?s=all&q=%s'
		}, {
			'id' : 14,
			'name' : 'Google Encrypted',
			'favicon' : './favicon/google.ico',
			'url' : 'https://encrypted.google.com/search?hl=en&q=%s'
		}, {
			'id' : 15,
			'name' : 'Wolfram Alpha',
			'favicon' : './favicon/wolfram.ico',
			'url' : 'http://www.wolframalpha.com/input/?i=%s'
		}, {
			'id' : 16,
			'name' : 'Yahoo',
			'favicon' : './favicon/yahoo.ico',
			'url' : 'https://search.yahoo.com/search?p=%s'
		}, {
			'id' : 17,
			'name' : 'Pinterest',
			'favicon' : './favicon/pinterest.ico',
			'url' : 'http://www.pinterest.com/search/pins/?q=%s'
		}, {
			'id' : 18,
			'name' : 'Zhihu',
			'favicon' : './favicon/zhihu.ico',
			'url' : 'http://www.zhihu.com/search?q=%s'
		}, {
			'id' : 19,
			'name' : 'Quora',
			'favicon' : './favicon/quora.ico',
			'url' : 'https://www.quora.com/search?q=%s'
		}, {
			'id' : 20,
			'name' : 'Stack Overflow',
			'favicon' : './favicon/stackoverflow.ico',
			'url' : 'http://www.stackoverflow.com/search?q=%s'
		}, {
			'id' : 21,
			'name' : 'Baidu',
			'favicon' : './favicon/baidu.ico',
			'url' : 'http://www.baidu.com/s?wd=%s'
		}, {
			'id' : 22,
			'name' : 'Github',
			'favicon' : './favicon/github.ico',
			'url' : 'https://github.com/search?q=%s'
		}, {
			'id' : 23,
			'name' : 'etao',
			'favicon' : './favicon/etao.ico',
			'url' : 'http://s.etao.com/search?q=%s'
		}];

var _i18n_msgs = ['reset_btn', 'vote_header', 'feedback_a', 'url_header',
		'fb_header', 'ab_header', 'search_header', 'se_header', 'url_helper_p',
		'search_helper_p', 'selected_mode_0_label', 'selected_mode_1_label',
		'selected_mode_2_label', 'index_mode_0_label', 'index_mode_1_label',
		'index_mode_2_label', 'lu_strong', 'ru_strong', 'ld_strong',
		'rd_strong', 'search_engine_a_0', 'search_engine_a_1',
		'search_engine_a_2', 'search_engine_a_3', 'feedback_h4',
		'donate_header', 'paypal_a', 'alipay_a'];

var _convert_selected_mode = function() {
	var selectedMode = _getLocal().selectedMode;
	chrome.storage.sync.set({
				'selectedMode' : selectedMode
			});
	return selectedMode;
};

var _convert_index_mode = function() {
	var indexMode = _getLocal().indexMode;
	chrome.storage.sync.set({
				'indexMode' : indexMode
			});
	return indexMode;
};

var _convert_search_engines = function() {
	var searchEngines = [];
	var _old = _getLocal().searchEngines;
	for (var i = 0; i < _old.length; i++) {
		if (isNaN(_old[i])) {// user SE
			searchEngines[i] = {
				id : -1,
				url : _old[i].url
			};
		} else { // build-in SE
			searchEngines[i] = {
				id : _old[i]
			};
		}
	}
	chrome.storage.sync.set({
				'searchEngines' : searchEngines
			});
	return searchEngines;
};

/**
 * @deprecated for old users
 */
function _getLocal() {
	var yadng = localStorage.getItem('yadng');
	if (!yadng) {
		return _getDefault();
	}
	return JSON.parse(yadng);
}

/**
 * @deprecated for old users
 */
function _getDefault() {
	return {
		'selectedMode' : 1,
		'indexMode' : 0,
		'searchEngines' : [0, 1, 11, 3]
	};
}