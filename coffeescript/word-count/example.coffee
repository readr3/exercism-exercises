exports.wordCount = (phrase) ->
  words = phrase.toLowerCase().match(/\w+/g)
  count = {}
  for word in words
    if !count.hasOwnProperty word
      count[word] = 0
    count[word] += 1
  count