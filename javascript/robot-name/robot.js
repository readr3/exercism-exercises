(function() {
  "use strict";

  function randomUpTo(n) {
    return Math.floor(Math.random() * n);
  }

  function randomCharacter(s) {
    return s.substr( randomUpTo(s.length), 1);
  }

  function randomCharacters(n, s) {
    var i, result = "";
    for (i = 0; i < n; i++) {
      result += randomCharacter(s);
    }
    return result;
  }

  function randomLetters(n) {
    return randomCharacters(n, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  function randomNumbers(n) {
    return randomCharacters(n, "0123456789");
  }

  function generateName() {
    return randomLetters(2) + randomNumbers(3);
  }

  function Robot() {
    this.reset();
  }

  Robot.prototype.reset = function() {
    this.name = generateName();
  };

  module.exports = Robot;
})();