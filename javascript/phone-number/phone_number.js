(function (){
  "use strict";

  global.Phone = function(input) {
    this.value = this.normalize(input);
  };

  global.Phone.prototype = {
    areaCode: function() {
      return this.value.slice(0,3);
    },
    exchangeCode: function() {
      return this.value.slice(3,6);
    },
    subscriberNumber: function() {
      return this.value.slice(6,10);
    },
    number: function() {
      return this.value;
    },
    toString: function() {
      return '(' + this.areaCode() + ') ' +
             this.exchangeCode() + '-' +
             this.subscriberNumber();
    },
    normalize: function(input) {
      var digits = this.digitsOf(input);
      if (digits.length === 10) {
        return digits;
      } else if (this.hasUsCountryCode(digits)) {
        return digits.slice(1);
      } else {
        return '0000000000';
      }
    },
    digitsOf: function(input) {
      return input.replace(/\D/g, '');
    },
    hasUsCountryCode: function(number) {
      return number.length === 11 && number[0] === '1';
    }
  };
})();