(function() {
  "use strict";

  function Bob() {
    function isSilent(phrase) {
      return phrase === '';
    }

    function isShouting(phrase) {
      return phrase.toUpperCase() === phrase;
    }

    function isAskingAQuestion(phrase) {
      return phrase[phrase.length - 1] === '?';
    }

    this.hey = function(phrase) {
      switch (true) {
        case isSilent(phrase):
          return 'Fine, be that way.';
        case isShouting(phrase):
          return 'Woah, chill out!';
        case isAskingAQuestion(phrase):
          return 'Sure';
        default:
          return 'Whatever';
      }
    };
  }

  module.exports = Bob;
})();