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

function Words(words) {
  'use strict';

  var counts, i, splitWords;

  counts = {};
  splitWords = words.split(' ');

  function toAlphaChars(string) {
    return string.replace(/[^\w]+/, '', '$&');
  }

  for (i in splitWords) {
    var word = toAlphaChars(splitWords[i]).toLowerCase();

    if (word.length === 0) {
      continue;
    }

    if (counts.hasOwnProperty(word)) {
      counts[word]++;
    }
    else {
      counts[word] = 1;
    }
  }

  this.count = counts;
}

module.exports = Words;