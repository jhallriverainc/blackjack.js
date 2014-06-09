"use strict";
var assert = require("assert"),
	shuffle = require("../shuffle.js");

module.exports = {
	"#shuffle": {
		"should give normal distribution of elements": function shouldGiveRandomDistributionOfElements(done) {
			var zeroTo13 = [];
			var thirteenTo26 = [];
			var twentySixTo39 = [];
			var thirtyNineTo52 = [];
			
			for (var j = 0; j < process.env.NUM_EXPERIMENTS; j++) {
				var elementsToShuffle = [];
				for (var i = 1; i <= 52; i++) {
					// we have a set of elements
					elementsToShuffle[i] = i;
				};
				var shuffledElements = shuffle(elementsToShuffle);
				var theFirstElement = shuffledElements[0];
				if (theFirstElement <= 13) {
					zeroTo13.push(theFirstElement);
				}
				if (theFirstElement > 13 && theFirstElement <= 26) {
					thirteenTo26.push(theFirstElement);
				}
				if (theFirstElement > 26 && theFirstElement <= 39) {
					twentySixTo39.push(theFirstElement);
				}
				if (theFirstElement > 39 && theFirstElement <= 52) {
					thirtyNineTo52.push(theFirstElement);
				}
			};
			var totalSample = process.env.NUM_EXPERIMENTS;

			console.log("0 - 13 Total:  ", zeroTo13.length); 
			console.log("0 - 13 distribution: ", zeroTo13.length/totalSample); 
			console.log("13 - 26 Total: ", thirteenTo26.length); 
			console.log("13 - 26 distribution: ", thirteenTo26.length/totalSample); 
			console.log("26 - 39 Total: ", twentySixTo39.length); 
			console.log("26 - 39 distribution: ", twentySixTo39.length/totalSample); 
			console.log("39 - 52 Total: ", thirtyNineTo52.length); 
			console.log("39 - 52 distribution: ", thirtyNineTo52.length/totalSample) 

			return done();
		}
	}
};

if (!module.parent)(new(require("mocha"))()).ui("exports").reporter("spec").addFile(__filename).grep(process.env.MOCHA_GREP || "").run(process.exit);