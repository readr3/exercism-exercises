'use strict';

var SCORES = {
  1:  ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  2:  ['d', 'g'],
  3:  ['b', 'c', 'm', 'p'],
  4:  ['f', 'h', 'v', 'w', 'y'],
  5:  ['k'],
  8:  ['j', 'x'],
  10: ['q', 'z']
};

exports.score = function (word) {
  var result = 0;
  if (!word) {
    return result;
  }
  word.split('').forEach(function(c) {
    result += characterScore(c.toLowerCase());
  });
  return result;
};

function characterScore(character) {
  for (var score in SCORES) {
    if (SCORES[score].indexOf(character) > -1) {
      return parseInt(score, 10);
    }
  }
}