var replaceEmoji = require('./replaceEmoji'),
	makeTwemojiRenderer = require('./makeTwemojiRenderer')

module.exports = function reactEasyEmoji (element, optionsOrFn) {
	var render = (typeof optionsOrFn === 'function') ? optionsOrFn : makeTwemojiRenderer(optionsOrFn)
	return replaceEmoji(element, render)
}