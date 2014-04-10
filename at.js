/*! http://mths.be/at v0.2.0 by @mathias */
if (!String.prototype.at) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var at = function(position) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			var size = string.length;
			// `ToInteger`
			var index = position ? Number(position) : 0;
			if (index != index) { // better `isNaN`
				index = 0;
			}
			// Account for out-of-bounds indices
			// The odd lower bound is because the ToInteger operation is
			// going to round `n` to `0` for `-1 < n <= 0`.
			if (index <= -1 || index >= size) {
				return '';
			}
			// Second half of `ToInteger`
			index = index | 0;
			// Get the first code unit and code unit value
			var cuFirst = string.charCodeAt(index);
			var cuSecond;
			var nextIndex = index + 1;
			var len = 1;
			if ( // check if it’s the start of a surrogate pair
				cuFirst >= 0xD800 && cuFirst <= 0xDBFF && // high surrogate
				size > nextIndex // there is a next code unit
			) {
				cuSecond = string.charCodeAt(nextIndex);
				if (cuSecond >= 0xDC00 && cuSecond <= 0xDFFF) { // low surrogate
					len = 2;
				}
			}
			return string.slice(index, index + len);
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'at', {
				'value': at,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.at = at;
		}
	}());
}
