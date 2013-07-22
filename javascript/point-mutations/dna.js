 (function() {
  "use strict";

  global.DNA = function(strand) {
    this.strand = strand;
  };

  global.DNA.prototype.hammingDistance = function(newStrand) {
    var result = 0;
    for (var i = 0; i <= Math.min(newStrand.length, this.strand.length) - 1; i++) {
      if (!this.nucleotide_matches(i, newStrand)) {
        result++;
      }
    }
    return result;
  };

  global.DNA.prototype.nucleotide_matches = function(i, newStrand) {
    return this.strand[i] === newStrand[i];
  };

})();