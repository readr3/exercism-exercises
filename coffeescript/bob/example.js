// Generated by CoffeeScript 1.6.3
(function() {
  var isQuestion, isShouting, isSilence;

  exports.hey = function(phrase) {
    if (isSilence(phrase)) {
      return 'Fine. Be that way!';
    }
    if (isShouting(phrase)) {
      return 'Woah, chill out!';
    }
    if (isQuestion(phrase)) {
      return 'Sure.';
    }
    return 'Whatever.';
  };

  isQuestion = function(phrase) {
    return phrase[phrase.length - 1] === '?';
  };

  isShouting = function(phrase) {
    return phrase.toUpperCase() === phrase;
  };

  isSilence = function(phrase) {
    return !phrase || !phrase.trim();
  };

}).call(this);
