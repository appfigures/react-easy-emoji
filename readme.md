# React easy emoji

[![string-replace-to-array on NPM](https://img.shields.io/npm/v/react-easy-emoji.svg)](https://www.npmjs.com/package/react-easy-emoji)
[![Build Status](https://img.shields.io/circleci/project/appfigures/react-easy-emoji.svg)](https://circleci.com/gh/appfigures/react-easy-emoji)

Super minimal emoji rendering library for React, with built in support for the wonderful [twemoji](https://github.com/twitter/twemoji) image set.

<a href="https://appfigures.com/reviews/41680810438L1SidPd0I5JBQAxo-L2DlLQ" target="_blank">
  <img src="https://raw.githubusercontent.com/appfigures/react-easy-emoji/master/images/review-appfigures.png" width="600" />
</a>
> We use react-easy-emoji at appFigures for rendering millions of [review cards](http://blog.appfigures.com/unleash-your-app-reviews-with-review-cards/).

## Example

**Basic uage**

```
import emoji from 'react-easy-emoji'

emoji('Emojis make me 😀')
// output: ['Emojis make me ', <img src="//twemoji.maxcdn.com/2/72x72/1f604.png" ... />]
```

**Inside a component**

```
import emoji from 'react-easy-emoji'
...
render: () => (
  <p>{ emoji('Emojis make me 😀') }</p>
)
```

## Features

- Simple functional API with minimal surface area.
- Used in production high-traffic pages.
- Lean implementation that follows the React way™ all the way down.
- Customizable rendering logic.

### What it doesn't do

- Parse emoji names (like `:smile:`)
- Provide built-in support for other emoji assets

## React version support

React 15.x, 0.14.x (and any version which supports `React.createElement`)

## Installation

```
npm install --save react-easy-emoji
```

## API

```
emoji(string|array[, options|renderFn]) => array
```

## Inspiration

Several libraries exist which manipulate the DOM directly to render emojis, but that's just not the React way™. Inspired by [this thread](https://github.com/facebook/react/issues/3386), and our need for a super simple emoji rendering library, we created react-easy-emoji.

## Alternatives

- https://github.com/banyan/react-emoji
- https://github.com/zxmys/react-twemoji
