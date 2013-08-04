Anagram = require('./example');

describe 'anagram', ->
  it 'returns an empty array for no matches', ->
    detector = new Anagram('diaper')
    expect(detector.match(['hello', 'world', 'zombie', 'pants'])).toEqual []

  it 'detects a simple anagram', ->
    detector = new Anagram('ba')
    expect(detector.match(['ab', 'abc', 'bac'])).toEqual ['ab']

  it 'detects multiple anagrams', ->
    detector = new Anagram('abc')
    expect(detector.match(['ab', 'abc', 'bac'])).toEqual ['abc', 'bac']

  it 'does not confuse different duplicates', ->
    detector = new Anagram('abb')
    expect(detector.match(['aab'])).toEqual []

  it 'does not confuse words with the same checksum', ->
    detector = new Anagram('abb')
    expect(detector.match(['aac'])).toEqual []

  it 'detects a normal anagram', ->
    detector = new Anagram('listen')
    expect(detector.match(['enlists', 'google', 'inlets', 'banana']))
      .toEqual ['inlets']

  it 'detects multiple normal anagrams', ->
    detector = new Anagram('allergy')
    expect(detector.match(
      ['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']))
        .toEqual ['gallery', 'regally', 'largely']

  it 'ignores case', ->
    detector = new Anagram('Orchestra')
    expect(detector.match(['cashregister', 'carthorse', 'radishes']))
      .toEqual ['carthorse']