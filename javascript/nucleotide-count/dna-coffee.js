// Generated by CoffeeScript 1.6.3
(function() {
  var DNA;

  DNA = (function() {
    function DNA(sequence) {
      this.sequence = sequence;
    }

    DNA.prototype.occurrencesOf = function(nucleotide) {
      return this.sequence.split(nucleotide).length - 1;
    };

    DNA.prototype.count = function(nucleotide) {
      var NUCLEOTIDES;
      NUCLEOTIDES = "ACGTU";
      if (NUCLEOTIDES.indexOf(nucleotide) === -1) {
        throw new Error("Invalid Nucleotide");
      } else {
        return this.occurrencesOf(nucleotide);
      }
    };

    DNA.prototype.nucleotideCounts = function() {
      return {
        A: this.count('A'),
        T: this.count('T'),
        C: this.count('C'),
        G: this.count('G')
      };
    };

    return DNA;

  })();

  global.DNA = DNA;

}).call(this);
