(function() {
  "use strict";

  global.School = function(name) {
    this.db = {};
  };

  global.School.prototype = {
    add: function(name, grade) {
      if (this.db.hasOwnProperty(grade)) {
        this.db[grade].push(name);
      } else {
        this.db[grade] = [ name ];
      }
    },
    grade: function(grade) {
      if (this.db.hasOwnProperty(grade)) {
        return this.db[grade];
      } else {
        return [];
      }
    },
    sort: function() {
      var result = {};
      var grades = Object.getOwnPropertyNames(this.db);
      grades.sort().forEach( function(grade, i, a) {
        result[grade] = this[grade].sort();
      }, this.db)
      return result;
    }
  };
})();