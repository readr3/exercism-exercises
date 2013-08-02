Binary = require('./example');

describe 'binary', ->

  it '1 is decimal 1', ->
    expect(1).toEqual new Binary('1').toDecimal()