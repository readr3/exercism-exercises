global.Anagram = function(term) {
  var sortedTerm = sortString(term);

  function isAnagram(word) {
    return sortedTerm === sortString(word);
  }

  function sortString(s) {
    return s.split('').sort().join('');
  }

  this.match = function(phrase) {
    var result = [];

    phrase.forEach(function(word) {
      if (isAnagram(word)) {
        result.push(word);
      }
    });

    return result;
  };
};