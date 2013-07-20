// ok, now that I see a CoffeeScript track is on the way, I'll stop

DNA = function(sequence) {
  this.sequence = sequence;
};

DNA.prototype.toRNA = function() {
  return this.sequence.replace(/T/g, 'U');
};

global.DNA = DNA;