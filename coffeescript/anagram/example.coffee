module.exports = class Anagram
  constructor: (term) ->
    @sortedTerm = sortString term.toLowerCase()

  match: (words) ->
    matches = []
    for word in words
      matches.push word if isAnagram word, @sortedTerm
    matches

isAnagram = (word, sortedTerm) ->
  sortString(word) == sortedTerm

sortString = (s) ->
  s.split('').sort().join('')