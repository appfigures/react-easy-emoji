var createElement = require('react').createElement

var pageProtocol = (typeof location === 'undefined') ? '' : ((location.protocol === 'https:') ? 'https:' : 'http:')

var emojiStyle = {
	height: '1em',
	width: '1em',
	margin: '0 .05em 0 .1em',
	verticalAlign: '-0.1em'
}

// Accept protocol with or without a colon
function normalizeProtocol(protocol) {
	if (protocol && protocol.length > 0 && protocol.charAt(protocol.length - 1) !== ':') {
		return protocol + ':'
	}
	return protocol
}

module.exports = function makeTwemojiRenderer(options) {
	options = merge({
		protocol: pageProtocol,
		baseUrl: '//cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/',
		size: '72x72',
		ext: '.png',
		props: null
	}, options)

	return function renderTwemoji (icon, match, offset) {
		var source = ''

		if (options.baseUrl.indexOf('http') !== 0) {
			source += normalizeProtocol(options.protocol)
		}
	
		var baseUrl = options.baseUrl.match('/$') //does it end with `/`?
			? options.baseUrl 
			: options.baseUrl + '/'
	
		source += baseUrl
	
		if(options.size !== '' && options.size != null){
			source += options.size + '/'
		}
	
		source += icon + options.ext

		return createElement(
			'img',
			merge({
				key: offset,
				alt: match,
				draggable: false,
				src: source,
				style: emojiStyle
			}, options.props)
		)
	}
}

function merge() {
	var out = {}, len = arguments.length
	for(var i = 0; i < len; ++i) {
		var source = arguments[i]
		if (source) {
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					out[key] = source[key]
				}
			}
		}
   }
   return out
}