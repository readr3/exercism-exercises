(function() {
  "use strict";

  function Robot() {
    function randomFrom(s) {
      return s.substr( Math.floor(Math.random() * s.length), 1);
    }

    function randomLetters(n) {
      var i, result = "";
      for (i = 0; i < n; i++) {
        result += randomFrom("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      return result;
    }

    function randomNumbers(n) {
      var i, result = "";
      for (i = 0; i < n; i++) {
        result += randomFrom("0123456789");
      }
      return result;
    }

    function generateName() {
      var result = "";
      result += randomLetters(2) + randomNumbers(3);
      return result;
    }

    this.reset = function() {
      this.name = generateName();
    };

    this.reset();
  }

  module.exports = Robot;
})();