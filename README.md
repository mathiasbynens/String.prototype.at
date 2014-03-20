# ES6/ES7 `String.prototype.at` polyfill [![Build status](https://travis-ci.org/mathiasbynens/String.prototype.at.svg?branch=master)](https://travis-ci.org/mathiasbynens/String.prototype.at)

A robust & optimized ES3-compatible polyfill for [the `String.prototype.at` proposal for ECMAScript 6/7](http://esdiscuss.org/topic/string-prototype-symbolat-improved-string-prototype-charat).

Spec bug ticket: <https://bugs.ecmascript.org/show_bug.cgi?id=2073>

## Spec proposal for `String.prototype.at(pos)`

**NOTE:** Returns a single-element String containing the code point at element position `pos` in the String `value` resulting from converting the `this` object to a String. If there is no element at that position, the result is the empty String. The result is a String value, not a String object.

When the `at` method is called with one argument `pos`, the following steps are taken:

01. Let `O` be `CheckObjectCoercible(this value)`.
02. Let `S` be `ToString(O)`.
03. `ReturnIfAbrupt(S)`.
04. Let `position` be `ToInteger(pos)`.
05. `ReturnIfAbrupt(position)`.
06. Let `size` be the number of elements in `S`.
07. If `position < 0` or `position ≥ size`, return the empty String.
08. Let `first` be the code unit at index `position` in the String `S`.
09. Let `cuFirst` be the code unit value of the element at index `0` in the String `first`.
10. If `cuFirst < 0xD800` or `cuFirst > 0xDBFF` or `position + 1 = size`, then return `first`.
11. Let `cuSecond` be the code unit value of the element at index `position + 1` in the String `S`.
12. If `cuSecond < 0xDC00` or `cuSecond > 0xDFFF`, then return `first`.
13. Let `second` be the code unit at index `position + 1` in the string `S`.
14. Let `cp` be `(first – 0xD800) × 0x400 + (second – 0xDC00) + 0x10000`.
15. Return the elements of the UTF-16 Encoding (clause 6) of `cp`.

**NOTE:** The `at` function is intentionally generic; it does not require that its `this` value be a String object. Therefore it can be transferred to other kinds of objects for use as a method.

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

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](http://mths.be/mit) license.
