"use strict";
var assert = require("assert"),
	Player = require("../Player");

module.exports = {
	"#constructor": {
		"should initialize player with a bankroll": function() {
			var bankroll = 1000;
			var player = new Player(bankroll);
			assert.equal(player.bankroll, bankroll, "Expected the bank roll to be initialized");
		},
		"should initialize a counting strategy": function() {
			var countStrategy = {
				foo: "strategy"
			};
			var player = new Player(10, null,countStrategy);
			assert.equal(player.countStrategy, countStrategy, "Expected the count strategy to be employed");
		}, 
		"should initialize  a play strategy": function(){
			var playStrategy = {
				foo: "strategy"
			}; 
			var player = new Player(10, playStrategy, null); 
			assert.equal(player.playStrategy, playStrategy, "Expected a play strategy to be employed"); 
		}, 

		"should use play strategy to decide": function (){
			var expectedhand = {"foo": 1}; 
			var expectedDecision = require("../actions").STAY 
			var playStrategy = {
				decide: function(hand, dealersCard){
					if(hand == expectedhand){
						return expectedDecision;	
					}
					 
				}
			};
			var player = new Player(10, playStrategy); 
			var actualDecision = player.decide(expectedhand); 
			assert.equal(actualDecision, expectedDecision, "Expected the decision to be determined by a play strategy"); 
		}, 
	}
};

if (!module.parent)(new(require("mocha"))()).ui("exports").reporter("spec").addFile(__filename).grep(process.env.MOCHA_GREP || "").run(process.exit);