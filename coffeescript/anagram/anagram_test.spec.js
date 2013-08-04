// Generated by CoffeeScript 1.6.3
(function() {
  var Anagram;

  Anagram = require('./example');

  describe('anagram', function() {
    it('returns an empty array for no matches', function() {
      var detector;
      detector = new Anagram('diaper');
      return expect(detector.match(['hello', 'world', 'zombie', 'pants'])).toEqual([]);
    });
    it('detects a simple anagram', function() {
      var detector;
      detector = new Anagram('ba');
      return expect(detector.match(['ab', 'abc', 'bac'])).toEqual(['ab']);
    });
    it('detects multiple anagrams', function() {
      var detector;
      detector = new Anagram('abc');
      return expect(detector.match(['ab', 'abc', 'bac'])).toEqual(['abc', 'bac']);
    });
    it('does not confuse different duplicates', function() {
      var detector;
      detector = new Anagram('abb');
      return expect(detector.match(['aab'])).toEqual([]);
    });
    it('does not confuse words with the same checksum', function() {
      var detector;
      detector = new Anagram('abb');
      return expect(detector.match(['aac'])).toEqual([]);
    });
    it('detects a normal anagram', function() {
      var detector;
      detector = new Anagram('listen');
      return expect(detector.match(['enlists', 'google', 'inlets', 'banana'])).toEqual(['inlets']);
    });
    it('detects multiple normal anagrams', function() {
      var detector;
      detector = new Anagram('allergy');
      return expect(detector.match(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading'])).toEqual(['gallery', 'regally', 'largely']);
    });
    return it('ignores case', function() {
      var detector;
      detector = new Anagram('Orchestra');
      return expect(detector.match(['cashregister', 'carthorse', 'radishes'])).toEqual(['carthorse']);
    });
  });

}).call(this);
