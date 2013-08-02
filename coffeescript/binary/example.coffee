module.exports = class Binary
  constructor: (binary) -> @binary = parseInt binary, 2

  toDecimal: ->
    result = Number @binary.toString 10
    return 0 if isNaN result
    result