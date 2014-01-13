'use strict';

function Binary(binaryString) {
  this.value = 0;
  var p = 1;
  for (var i = binaryString.length - 1; i >= 0; i--) {
    if (binaryString[i] === '1') {
      this.value += p;
    }
    p *= 2;
  }
}

Binary.prototype.toDecimal = function () {
  return this.value;
};

module.exports = Binary;
