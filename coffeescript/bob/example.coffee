exports.hey = (phrase) ->
  return 'Fine. Be that way!' if isSilence(phrase)
  return 'Woah, chill out!'   if isShouting(phrase)
  return 'Sure.'              if isQuestion(phrase)
  return 'Whatever.'

isQuestion = (phrase) ->
  phrase[phrase.length - 1] is '?'

isShouting = (phrase) ->
  phrase.toUpperCase() is phrase

isSilence = (phrase) ->
  not phrase or not phrase.trim()