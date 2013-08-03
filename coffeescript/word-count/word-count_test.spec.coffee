phrase = require('./example');

describe 'wordCount', ->

  it 'counts one word', ->
    expect(phrase.wordCount('word')).toEqual { "word": 1 }

  it 'counts one of each', ->
    expect(phrase.wordCount('one of each')).toEqual {
      "one" : 1
      "of"  : 1
      "each": 1
    }

  it 'counts multiple occurrences', ->
    expect(phrase.wordCount('one fish two fish red fish blue fish')).toEqual {
      "one" : 1
      "fish": 4
      "two" : 1
      "red" : 1
      "blue": 1
    }

  it 'ignores punctuation', ->
    expect(
      phrase.wordCount('car : carpet as java : javascript!!&@$%^&')).toEqual {
      "car"       : 1
      "carpet"    : 1
      "as"        : 1
      "java"      : 1
      "javascript": 1
    }

  it 'includes numbers', ->
    expect(phrase.wordCount('testing, 1, 2 testing')).toEqual {
      "testing": 2
      "1"      : 1
      "2"      : 1
    }

  it 'normalizes case', ->
    expect(phrase.wordCount('go Go GO')).toEqual { "go": 3 }