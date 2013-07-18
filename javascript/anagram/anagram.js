global.Anagram = function(term) {
  var characters = term.split('').sort();

  this.match = function(phrase) {
    var result = [];

    phrase.forEach(function(word) {
      if (word.split('').sort().compare(characters)) {
        result.push(word);
      }
    });

    return result;
  };
};

Array.prototype.compare = function(array) {
  if (!array) {
    return false;
  }

  if (this.length !== array.length) {
    return false;
  }

  for (var i = 0; i < this.length; i++) {
    if (this[i] !== array[i]) {
      return false;
    }
  }

  return true;
};