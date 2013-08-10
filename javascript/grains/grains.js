'use strict';

function Grains() {}

Grains.prototype.square = function (n) {
  return Math.pow(2, n-1);
};

Grains.prototype.total = function () {
  var count = 0;
  for (var i = 1; i <= 64; i++) {
    count += this.square(i);
  }
  return count;
};

module.exports = Grains;