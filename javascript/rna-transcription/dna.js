(function() {
  "use strict";

  global.DNA = function(sequence) {
    this.sequence = sequence;
  };

  DNA.prototype.toRNA = function() {
    return this.sequence.replace(/T/g, 'U');
  };
})();