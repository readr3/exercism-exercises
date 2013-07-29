// global.Words = function(phrase) {
//   var wordList = phrase.toLowerCase().split(/\W+/);

//   function WordCounts(wordList) {
//     var that = this;

//     function increment(word) {
//       if (!that.hasOwnProperty(word))
//       {
//         that[word] = 0;
//       }
//       that[word] += 1;
//     }

//     wordList.forEach(function (word) {
//       if (word.length > 0)
//       {
//         increment(word);
//       }
//     });
//   }

//   this.count = new WordCounts(wordList);
// };

(function() {

  var cleanMessage = function(message) {
    return message.replace(/[|&;$%@"<>()+,:!!^]/g, "").toLowerCase();
  }

  var calculateWords = function(message) {
    var out = {}
      , arrayOfWords = cleanMessage(message).split(/\s+/);

    for(i = 0; i < arrayOfWords.length; i++) {
      var word = arrayOfWords[i];
      if (out[word])
        out[word] += 1;
      else
        out[word] = 1;
    }

    return out ;
  }

  this.Words = function(message) {
    this.count = calculateWords(message);
  };

})();