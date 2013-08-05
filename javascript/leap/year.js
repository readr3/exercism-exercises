'use strict';

function Year(number) {
  this.year = number;
}

Year.prototype.isDivisibleBy = function(divisor) {
  return this.year % divisor === 0;
};

Year.prototype.isLeapYear = function() {
  return (this.isDivisibleBy(4) && !this.isDivisibleBy(100)) || this.isDivisibleBy(400);
};

module.exports = Year;