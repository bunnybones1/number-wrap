var range;
function wrap(val, min, max) {
	range = max - min;
	val = (val - min) % range;
	if(val < 0) {
		return val + range;
	} else {
		return val;
	}
}

module.exports = wrap;