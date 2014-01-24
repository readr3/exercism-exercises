class Words
  constructor: (@phrase) ->
    @count = countWords(@phrase.toLowerCase().split(/\W+/))

countWords = (wordArray) ->
  result = {}
  for word in wordArray when word != ''
    result[word] = 0 if not result[word]
    result[word] += 1
  result

module.exports = Words