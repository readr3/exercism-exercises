// Generated by CoffeeScript 1.6.3
(function() {
  var Binary;

  Binary = require('./example');

  describe('binary', function() {
    return it('1 is decimal 1', function() {
      return expect(1).toEqual(new Binary('1').toDecimal());
    });
  });

}).call(this);