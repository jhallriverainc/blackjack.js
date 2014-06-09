var Player = module.exports = (function(){
	var klass = function Player(bankroll, playStrategy, countStrategy){
		var self = this; 
		this.bankroll = bankroll; 
		this.countStrategy = countStrategy; 
		this.playStrategy = playStrategy;
		this.decide = function(hand){
			return self.playStrategy.decide(hand); 
		}; 
	}; 
	klass.count = 0;
	klass.hand = []; 
	return klass; 
})(); 