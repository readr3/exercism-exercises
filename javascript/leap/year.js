'use strict';

function isDivisible(numerator, denominator) {
  return numerator % denominator === 0;
}

function isLeapException(n) {
  return isDivisible(n, 100) && !isDivisible(n, 400);
}

function Year(number) {
  this.year = number;
}

Year.prototype.isLeapYear = function() {
  return isDivisible(this.year, 4) && !isLeapException(this.year);
};

module.exports = Year;