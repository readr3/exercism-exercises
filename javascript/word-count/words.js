global.Words = function(phrase) {
  var wordList = phrase.toLowerCase().split(/\W+/);

  function WordCounts(wordList) {
    var that = this;

    function increment(word) {
      if (!that.hasOwnProperty(word))
      {
        that[word] = 0;
      }
      that[word] += 1;
    }

    wordList.forEach(function (word) {
      if (word.length > 0)
      {
        increment(word);
      }
    });
  }

  this.count = new WordCounts(wordList);
};
