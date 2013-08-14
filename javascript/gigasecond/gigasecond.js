'use strict';

var SECONDS_PER_GIGASECOND = 1000000000;
var SECONDS_PER_DAY = 86400;

function addDays(date, days) {
  var newDate = date;
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

function Gigasecond(birthday) {
  this.birthday = birthday;
}

Gigasecond.prototype.date = function () {
  return addDays(this.birthday, SECONDS_PER_GIGASECOND / SECONDS_PER_DAY);
};

module.exports = Gigasecond;