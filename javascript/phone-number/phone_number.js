(function (){
  "use strict";

  global.Phone = function(input) {
    this.rawNumber = this.cleanUp(input);
  };

  Phone.prototype.areaCode = function() {
    return this.rawNumber.substr(0,3);
  };

  Phone.prototype.exchangeCode = function() {
    return this.rawNumber.substr(3,3);
  };

  Phone.prototype.subscriberNumber = function() {
    return this.rawNumber.substr(6,4);
  };

  Phone.prototype.number = function() {
    return this.rawNumber;
  };

  Phone.prototype.toString = function() {
  return '(' + this.areaCode() + ') ' +
         this.exchangeCode() + '-' +
         this.subscriberNumber();
  };

  Phone.prototype.cleanUp = function(input) {
    var digits = this.digitsOf(input);
    if (this.isNormalLength(digits)) {
      return digits;
    } else if (this.hasUsCountryCode(digits)) {
      return digits.slice(1);
    } else {
      return '0000000000';
    }
  };

  Phone.prototype.digitsOf = function(input) {
    return input.replace(/\D/g, '');
  };

  Phone.prototype.hasUsCountryCode = function(number) {
    return number.length === 11 && number[0] === '1';
  };

  Phone.prototype.isNormalLength = function(number) {
    return number.length === 10;
  };

})();