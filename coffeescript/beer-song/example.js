// Generated by CoffeeScript 1.6.3
(function() {
  var firstLine, interpolate, secondLine, verse, verses;

  exports.sing = function(start, end) {
    if (typeof end === 'undefined') {
      end = 0;
    }
    return verses(start, end);
  };

  exports.verse = verse = function(n) {
    return firstLine.sing(n) + secondLine.sing(n);
  };

  verses = function(start, end) {
    var i, result, _i;
    result = [];
    for (i = _i = start; start <= end ? _i <= end : _i >= end; i = start <= end ? ++_i : --_i) {
      result.push(verse(i));
    }
    return result.join("\n");
  };

  firstLine = {
    base: "{0} {1} of beer on the wall, {0} {1} of beer.\n",
    zero: "No more bottles of beer on the wall, no more bottles of beer.\n",
    sing: function(bottles) {
      if (bottles === 0) {
        return this.zero;
      } else if (bottles === 1) {
        return interpolate(this.base, '1', 'bottle');
      } else {
        return interpolate(this.base, bottles, 'bottles');
      }
    }
  };

  secondLine = {
    base: "Take one down and pass it around, {0} {1} of beer on the wall.\n",
    zero: "Go to the store and buy some more, 99 bottles of beer on the wall.\n",
    one: "Take it down and pass it around, no more bottles of beer on the wall.\n",
    sing: function(bottlesLeft) {
      if (bottlesLeft === 0) {
        return this.zero;
      } else if (bottlesLeft === 1) {
        return this.one;
      } else if (bottlesLeft === 2) {
        return interpolate(this.base, '1', 'bottle');
      } else {
        return interpolate(this.base, bottlesLeft - 1, 'bottles');
      }
    }
  };

  interpolate = function(s) {
    var i, regex, _i, _ref;
    for (i = _i = 0, _ref = arguments.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      regex = new RegExp("\\{" + i + "\\}", "g");
      s = s.replace(regex, arguments[i + 1]);
    }
    return s;
  };

}).call(this);
