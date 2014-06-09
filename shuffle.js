exports = module.exports = function shuffle(elementsToShuffle) {
	var i = elementsToShuffle.length,
		j, swap;
	while (--i) {
		j = Math.random() * (i + 1) | 0;
		swap = elementsToShuffle[i];
		elementsToShuffle[i] = elementsToShuffle[j];
		elementsToShuffle[j] = swap;
	}
	return elementsToShuffle;
};

exports.shuffle = exports;