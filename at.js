/*! http://git.io/stringat v0.1.0 by @mathias */
if (!String.prototype.at) {
	String.prototype.at = function(position) {
		var string = String(this);
		var size = string.length;
		// `ToInteger`
		var index = position ? Number(position) : 0;
		if (isNaN(index)) {
			index = 0;
		}
		// Account for out-of-bounds indices
		if (index < 0 || index >= size) {
			return '';
		}
		// Get the first code unit and code unit value
		var first = string.charAt(index);
		var cuFirst = string.charCodeAt(index);
		var cuSecond;
		if ( // check if it’s the start of a surrogate pair
			cuFirst >= 0xD800 && cuFirst <= 0xDBFF && // high surrogate
			size > index + 1 // there is a next code unit
		) {
			cuSecond = string.charCodeAt(index + 1);
			if (cuSecond >= 0xDC00 && cuSecond <= 0xDFFF) { // low surrogate
				return first + string.charAt(index + 1);
			}
		}
		return first;
	};
}
