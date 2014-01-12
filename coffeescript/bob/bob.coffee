isQuestion = (phrase) ->
  phrase[phrase.length - 1] == '?'

isShouting = (phrase) ->
  phrase == phrase.toUpperCase()

isSilent = (phrase) ->
  phrase.trim() == ''

class Bob
  hey: (phrase) ->
    if isSilent(phrase)
      'Fine. Be that way!'
    else if isShouting(phrase)
      'Woah, chill out!'
    else if isQuestion(phrase)
      'Sure.'
    else
      'Whatever.'

module.exports = Bob