# React Easy Emoji 🎉

[![react-easy-emoji MIT license on NPM](https://img.shields.io/npm/l/react-easy-emoji.svg?style=flat-square)](https://www.npmjs.com/package/react-easy-emoji)
[![react-easy-emoji on NPM](https://img.shields.io/npm/v/react-easy-emoji.svg)](https://www.npmjs.com/package/react-easy-emoji)
[![Build Status](https://img.shields.io/circleci/project/appfigures/react-easy-emoji.svg)](https://circleci.com/gh/appfigures/react-easy-emoji)
[![react-easy-emoji total downloads on NPM](https://img.shields.io/npm/dt/react-easy-emoji.svg?style=flat-square)](https://www.npmjs.com/package/react-easy-emoji)
[![react-easy-emoji monthly downloads on NPM](https://img.shields.io/npm/dm/react-easy-emoji.svg?style=flat-square)](https://www.npmjs.com/package/react-easy-emoji)

Super minimal emoji rendering utility for React, with built in support for the wonderful [twemoji](https://github.com/twitter/twemoji) image set.

> We use Easy Emoji at Appfigures for rendering millions of [review cards](http://blog.appfigures.com/unleash-your-app-reviews-with-review-cards/).

<a href="https://appfigures.com/reviews/41680810438L1SidPd0I5JBQAxo-L2DlLQ" target="_blank">
  <img src="https://raw.githubusercontent.com/appfigures/react-easy-emoji/master/images/review-appfigures.png" width="600" />
</a>

## Example

**Basic usage**

```
import emoji from 'react-easy-emoji'

emoji('Emojis make me 😀')
// output: ['Emojis make me ', <img src="//twemoji.maxcdn.com/2/72x72/1f604.png" ... />]
```

**Rendering emojis in a component**

```
import emoji from 'react-easy-emoji'

class Page extends React.Component {
	render () {
		return <p>{ emoji('Emojis make me 😀') }</p>
	}
}
```

## Features

- It's [tiny](https://github.com/appfigures/react-easy-emoji/tree/master/lib) (on purpose).
- Simple functional API with minimal surface area and full customization hooks.
- Lean implementation that follows the React way™ all the way down (no DOM manipulation).
- Renders emoji from Twitter's Twemoji cdn out of the box.
- Currently in use on high-traffic production pages.

## What it doesn't do

We've consciously left out some extra features in order to keep this library as [minimal](https://en.wikipedia.org/wiki/Unix_philosophy) as possible:

- Doesn't parse emoji names like `:smile:`.
- Doesn't parse emoticons like `:)`.
- Doesn't provide built-in support for emoji assets other than Twemoji, but provides hooks to use custom sets.

## Installation

```
npm install --save react-easy-emoji
```

## React version support

React 0.14.x, 15.x, 16.x

## Common tasks

### Using svg Twemoji assets instead of the default png

React Easy Emoji uses png assets from the Twemoji CDN by default. To use svg assets instead you can pass a few extra options:

```
function svgEmoji (input) {
	return emoji(input, {
		baseUrl: 'https://twemoji.maxcdn.com/2/svg/',
		ext: '.svg',
		size: ''
	})
}

// example output: https://twemoji.maxcdn.com/2/svg/1f600.svg
```

### Using EmojiOne cdn assets instead of Twemoji

While there's only built-in support for Twemoji assets, using assets from other libraries is extremely easy:

```
function emojiOne(input) {
	return emoji(input, {
		baseUrl: '//cdnjs.cloudflare.com/ajax/libs/emojione/2.2.5/assets/png/',
		size: ''
	})
}
```

### Rendering a custom React element instead of `<img>`

For full control over how emojis get rendered just provide a function as the second parameter:

```
function customEmoji (input) {
	return emoji(input, (code, string, key) => (
		<MyEmoji code={ code } alt={ string } key={ key } />
	))
}
```

## API Reference

### `emoji(string|array[, options|renderFn]) => array`

This is the only function in this library. It allows for several different levels of customization

#### Parameters

`input: string | array`

The object to be emojified. Can be a simple string or an array which mixes react elements and strings. When an array is processed, all react elements are simply skipped but still get included in the output.

**Array input example**

```
emoji(['simple string', <br />, 'string with emoji 🍻'])
// Output: ['simple string', <br />, 'string with emoji ', <img src="//twemoji.maxcdn.com/..." />]
```
> Notice how the first two items in the array remain exactly the same, while the third gets split up.

`options : object | renderFn : func`

For basic customization pass in an options object to specify how image urls are constructed. The following options are available:

- `baseUrl : string` - Location of emoji images. Defaults to `//twemoji.maxcdn.com/2/`
- `size : string` - Size of emojis images to use. Notice that this is the size of the base images, not the actual size the emoji will be rendered on the page. Defaults to `'72x72'`. For valid sizes to use with the Twemoji image set, please visit the [Twemoji project page](https://github.com/twitter/twemoji).
- `ext : string` - File extension to be appended to the end of the url. Defaults to `.png`.
- `protocol : string` - The url protocol of the image (either `http:` or `https:`). Defaults to the protocol of the current page to prevent mismatched protocol errors. To create a url with no protocol (ie. `//twemoji.maxcdn.com/...`) pass an empty string (`''`).
- `props : object` - Additional props to merge into the `<img>` jsx element. Defaults to `null`. Note that user provided props are applied last and may override any previous ones.

For complete control over the output emoji, pass a function instead of an options object, with the following signature:

```
(code, string, offset) => element : ReactElement
```

**Params**

- `code : string` - The unicode value for the emoji. This is usually used to construct the source url.
- `string : string` - The original string version of the emoji. This is usually used as the `alt` attribute to make copy and paste behave as expected.
- `offset : number` - The zero-based position of the emoji in the original string. This is safe to use as the `key` attribute on the returned jsx element.

**Return**

This function must return a valid React element. Since the output will be placed in an array it must have a `key` attribute. For more information on why a `key` attribute is required see the [React docs](https://facebook.github.io/react/docs/lists-and-keys.html#keys)

Example:

```
emoji(string, (code, string, offset) => {
	return <MyEmoji code={ code } alt={ string } key={ offset } />
})
```

## Inspiration

While building [Appfigures Review Cards](http://blog.appfigures.com/unleash-your-app-reviews-with-review-cards/) we needed a simple emoji rendering library for React. We found several but none of them checked all of our boxes. The idealist in us wanted a library that doesn't pack any unnecessary features, doesn't manipulate the DOM, and has a functional API that does things the React way™. So with a little inspiration from [this thread](https://github.com/facebook/react/issues/3386) we decided to roll our own.

## Other React emoji libraries

- https://github.com/banyan/react-emoji
- https://github.com/zxmys/react-twemoji
