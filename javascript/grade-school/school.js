(function() {
  "use strict";

  global.School = function() {
    this.db = {};
  };

  School.prototype.add = function(name, grade) {
    if (this.db.hasOwnProperty(grade)) {
      this.db[grade].push(name);
    } else {
      this.db[grade] = [ name ];
    }
  };

  School.prototype.grade = function(grade) {
    if (this.db.hasOwnProperty(grade)) {
      return this.db[grade];
    } else {
      return [];
    }
  };

  School.prototype.sort = function() {
    var result = {};
    var grades = Object.getOwnPropertyNames(this.db);
    grades.sort().forEach( function(grade) {
      result[grade] = this[grade].sort();
    }, this.db);
    return result;
  };

})();