var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../at.js');

assertEquals(String.prototype.at.length, 1);
assertEquals(String.prototype.propertyIsEnumerable('at'), false);

// String that starts with a BMP symbol
assertEquals('abc\uD834\uDF06def'.at(-Infinity), '');
assertEquals('abc\uD834\uDF06def'.at(-1), '');
assertEquals('abc\uD834\uDF06def'.at(-0), 'a');
assertEquals('abc\uD834\uDF06def'.at(+0), 'a');
assertEquals('abc\uD834\uDF06def'.at(1), 'b');
assertEquals('abc\uD834\uDF06def'.at(3), '\uD834\uDF06');
assertEquals('abc\uD834\uDF06def'.at(4), '\uDF06');
assertEquals('abc\uD834\uDF06def'.at(5), 'd');
assertEquals('abc\uD834\uDF06def'.at(42), '');
assertEquals('abc\uD834\uDF06def'.at(+Infinity), '');
assertEquals('abc\uD834\uDF06def'.at(null), 'a');
assertEquals('abc\uD834\uDF06def'.at(undefined), 'a');
assertEquals('abc\uD834\uDF06def'.at(), 'a');
assertEquals('abc\uD834\uDF06def'.at(false), 'a');
assertEquals('abc\uD834\uDF06def'.at(NaN), 'a');
assertEquals('abc\uD834\uDF06def'.at(''), 'a');
assertEquals('abc\uD834\uDF06def'.at('_'), 'a');
assertEquals('abc\uD834\uDF06def'.at('1'), 'b');

assertEquals(String.prototype.at.call('abc\uD834\uDF06def', -Infinity), '');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', -1), '');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', -0), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', +0), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', 1), 'b');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', 3), '\uD834\uDF06');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', 4), '\uDF06');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', 5), 'd');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', 42), '');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', +Infinity), '');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', null), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', undefined), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def'), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', false), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', NaN), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', ''), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', '_'), 'a');
assertEquals(String.prototype.at.call('abc\uD834\uDF06def', '1'), 'b');

// String that starts with an astral symbol
assertEquals('\uD834\uDF06def'.at(-Infinity), '');
assertEquals('\uD834\uDF06def'.at(-1), '');
assertEquals('\uD834\uDF06def'.at(-0), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at(+0), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at(1), '\uDF06');
assertEquals('\uD834\uDF06def'.at(2), 'd');
assertEquals('\uD834\uDF06def'.at(3), 'e');
assertEquals('\uD834\uDF06def'.at(4), 'f');
assertEquals('\uD834\uDF06def'.at(42), '');
assertEquals('\uD834\uDF06def'.at(+Infinity), '');
assertEquals('\uD834\uDF06def'.at(null), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at(undefined), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at(), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at(false), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at(NaN), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at(''), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at('_'), '\uD834\uDF06');
assertEquals('\uD834\uDF06def'.at('1'), '\uDF06');

assertEquals(String.prototype.at.call('\uD834\uDF06def', -Infinity), '');
assertEquals(String.prototype.at.call('\uD834\uDF06def', -1), '');
assertEquals(String.prototype.at.call('\uD834\uDF06def', -0), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', +0), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', 1), '\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', 2), 'd');
assertEquals(String.prototype.at.call('\uD834\uDF06def', 3), 'e');
assertEquals(String.prototype.at.call('\uD834\uDF06def', 4), 'f');
assertEquals(String.prototype.at.call('\uD834\uDF06def', 42), '');
assertEquals(String.prototype.at.call('\uD834\uDF06def', +Infinity), '');
assertEquals(String.prototype.at.call('\uD834\uDF06def', null), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', undefined), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def'), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', false), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', NaN), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', ''), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', '_'), '\uD834\uDF06');
assertEquals(String.prototype.at.call('\uD834\uDF06def', '1'), '\uDF06');

// Lone high surrogates
assertEquals('\uD834abc'.at(-Infinity), '');
assertEquals('\uD834abc'.at(-1), '');
assertEquals('\uD834abc'.at(-0), '\uD834');
assertEquals('\uD834abc'.at(+0), '\uD834');
assertEquals('\uD834abc'.at(1), 'a');
assertEquals('\uD834abc'.at(42), '');
assertEquals('\uD834abc'.at(+Infinity), '');
assertEquals('\uD834abc'.at(null), '\uD834');
assertEquals('\uD834abc'.at(undefined), '\uD834');
assertEquals('\uD834abc'.at(), '\uD834');
assertEquals('\uD834abc'.at(false), '\uD834');
assertEquals('\uD834abc'.at(NaN), '\uD834');
assertEquals('\uD834abc'.at(''), '\uD834');
assertEquals('\uD834abc'.at('_'), '\uD834');
assertEquals('\uD834abc'.at('1'), 'a');

assertEquals(String.prototype.at.call('\uD834abc', -Infinity), '');
assertEquals(String.prototype.at.call('\uD834abc', -1), '');
assertEquals(String.prototype.at.call('\uD834abc', -0), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc', +0), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc', 1), 'a');
assertEquals(String.prototype.at.call('\uD834abc', 42), '');
assertEquals(String.prototype.at.call('\uD834abc', +Infinity), '');
assertEquals(String.prototype.at.call('\uD834abc', null), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc', undefined), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc'), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc', false), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc', NaN), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc', ''), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc', '_'), '\uD834');
assertEquals(String.prototype.at.call('\uD834abc', '1'), 'a');


// Lone low surrogates
assertEquals('\uDF06abc'.at(-Infinity), '');
assertEquals('\uDF06abc'.at(-1), '');
assertEquals('\uDF06abc'.at(-0), '\uDF06');
assertEquals('\uDF06abc'.at(+0), '\uDF06');
assertEquals('\uDF06abc'.at(1), 'a');
assertEquals('\uDF06abc'.at(42), '');
assertEquals('\uDF06abc'.at(+Infinity), '');
assertEquals('\uDF06abc'.at(null), '\uDF06');
assertEquals('\uDF06abc'.at(undefined), '\uDF06');
assertEquals('\uDF06abc'.at(), '\uDF06');
assertEquals('\uDF06abc'.at(false), '\uDF06');
assertEquals('\uDF06abc'.at(NaN), '\uDF06');
assertEquals('\uDF06abc'.at(''), '\uDF06');
assertEquals('\uDF06abc'.at('_'), '\uDF06');
assertEquals('\uDF06abc'.at('1'), 'a');

assertEquals(String.prototype.at.call('\uDF06abc', -Infinity), '');
assertEquals(String.prototype.at.call('\uDF06abc', -1), '');
assertEquals(String.prototype.at.call('\uDF06abc', -0), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc', +0), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc', 1), 'a');
assertEquals(String.prototype.at.call('\uDF06abc', 42), '');
assertEquals(String.prototype.at.call('\uDF06abc', +Infinity), '');
assertEquals(String.prototype.at.call('\uDF06abc', null), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc', undefined), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc'), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc', false), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc', NaN), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc', ''), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc', '_'), '\uDF06');
assertEquals(String.prototype.at.call('\uDF06abc', '1'), 'a');

// Calling on `undefined`/`null`
assertThrows(function() { String.prototype.at.call(undefined); }, TypeError);
assertThrows(function() { String.prototype.at.call(undefined, 4); }, TypeError);
assertThrows(function() { String.prototype.at.call(null); }, TypeError);
assertThrows(function() { String.prototype.at.call(null, 4); }, TypeError);
assertEquals(String.prototype.at.call(42, 0), '4');
assertEquals(String.prototype.at.call(42, 1), '2');
assertEquals(String.prototype.at.call({ 'toString': function() { return 'abc'; } }, 2), 'c');

assertThrows(function() { String.prototype.at.apply(undefined); }, TypeError);
assertThrows(function() { String.prototype.at.apply(undefined, [4]); }, TypeError);
assertThrows(function() { String.prototype.at.apply(null); }, TypeError);
assertThrows(function() { String.prototype.at.apply(null, [4]); }, TypeError);
assertEquals(String.prototype.at.apply(42, [0]), '4');
assertEquals(String.prototype.at.apply(42, [1]), '2');
assertEquals(String.prototype.at.apply({ 'toString': function() { return 'abc'; } }, [2]), 'c');
