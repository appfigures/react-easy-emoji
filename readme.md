# React easy emoji

[![string-replace-to-array on NPM](https://img.shields.io/npm/v/react-easy-emoji.svg)](https://www.npmjs.com/package/react-easy-emoji)
[![Build Status](https://img.shields.io/circleci/project/appfigures/react-easy-emoji.svg)](https://circleci.com/gh/appfigures/react-easy-emoji)

Super minimal emoji rendering library for React, with built in support for the wonderful [twemoji](https://github.com/twitter/twemoji) set.

<a href="https://appfigures.com/reviews/41680810438L1SidPd0I5JBQAxo-L2DlLQ" target="_blank">
  <img src="https://raw.githubusercontent.com/appfigures/react-easy-emoji/master/images/review-appfigures.png" width="600" />
</a>
> We use react-easy-emoji for rendering millions of [review cards](http://blog.appfigures.com/unleash-your-app-reviews-with-review-cards/) every day.

## Features

- Simple API
- Lean

### What it doesn't do

- Parse emoji names (like `:smile:`)

## Support

React 0.14.x, 15.x

## Example

### Basic uage

```
import emoji from 'react-easy-emoji'

emoji('Emojis make me 😀')
// output: ['Emojis make me ', <img src="//twemoji.maxcdn.com/2/72x72/1f604.png" ... />]
```

### In a component

```
import emoji from 'react-easy-emoji'

render () {
  return (
    <p>{ emoji('Emojis make me 😀') }</p>
  )
}
```

## What it doesn't do

## Customizing

## Usage
### Installation

```
npm install --save react-easy-emoji
```

### API

```
emoji(string|array[, options|renderFn]) => array
```

# Inspiration

Several libraries exist which manipulate the DOM directly to render emojis, but that's just not the React way™. Inspired [this thread](https://github.com/facebook/react/issues/3386), and our need for a super simple emoji rendering library, we created react-easy-emoji.

# Alternatives
