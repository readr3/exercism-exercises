'use strict';

var ORBITAL_PERIODS = {
  Mercury:    7600530.24,
  Venus  :   19413907.20,
  Earth  :   31558149.76,
  Mars   :   59354294.40,
  Jupiter:  374335776.00,
  Saturn :  929596608.00,
  Uranus : 2661041808.00,
  Neptune: 5200418592.00
};

function generatePlanetMethod(planet) {
  return function () {
    return round(this.seconds / ORBITAL_PERIODS[planet], 2);
  };
}

function round(n, decimals) {
  var multiplier = Math.pow(10, decimals);
  return Math.round(multiplier * n) / multiplier;
}

function SpaceAge(seconds) {
  this.seconds = seconds;

  for ( var planet in ORBITAL_PERIODS ) {
    if (ORBITAL_PERIODS.hasOwnProperty(planet)) {
      this["on" + planet] = generatePlanetMethod(planet);
    }
  }
}
  
module.exports = SpaceAge;