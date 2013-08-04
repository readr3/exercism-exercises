exports.hey = (phrase) ->
  return 'Fine. Be that way!' if isSilence(phrase)
  return 'Woah, chill out!'   if isShouting(phrase)
  return 'Sure.'              if isQuestion(phrase)
  return 'Whatever.'

isQuestion = (phrase) ->
  phrase[phrase.length - 1] == '?'

isShouting = (phrase) ->
  phrase.toUpperCase() == phrase

isSilence = (phrase) ->
  !phrase || !phrase.trim()