# ES6 `String.prototype.at` polyfill [![Build status](https://travis-ci.org/mathiasbynens/String.prototype.at.png?branch=master)](https://travis-ci.org/mathiasbynens/String.prototype.at)

A robust & optimized ES3-compatible polyfill for [the `String.prototype.at` proposal for ECMAScript 6](http://esdiscuss.org/topic/string-prototype-symbolat-improved-string-prototype-charat).

## Installation

In a browser:

```html
<script src="at.js"></script>
```

Via [npm](http://npmjs.org/):

```bash
npm install string.prototype.at
```

Then, in [Node.js](http://nodejs.org/):

```js
require('string.prototype.at');

// On Windows and on Mac systems with default settings, case doesn’t matter,
// which allows you to do this instead:
require('String.prototype.at');
```

## Notes

Polyfills and test suites for [`String.fromCodePoint`](http://mths.be/fromcodepoint), [`String.prototype.codePointAt`](http://mths.be/codepointat) are available, too.

## Author

| [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](http://mths.be/mit) license.
