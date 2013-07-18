class Beer
  constructor: ->
    if !(@ instanceof Beer) then return new Beer()

  bottles: (n) ->
    switch n
      when 0 then "no more bottles"
      when 1 then "1 bottle"
      else n + " bottles"

  pronoun: (n) ->
    if n == 1 then "it" else "one"

  earlyVerse: (n) ->
    ["#{@bottles(n)} of beer on the wall,"
    " #{@bottles(n)} of beer.\n"
    "Take #{@pronoun(n)} down and pass it around,"
    " #{@bottles(n-1)} of beer on the wall.\n"].join('')

  finalVerse: ->
    ['No more bottles of beer on the wall,'
    ' no more bottles of beer.\n'
    'Go to the store and buy some more,'
    ' 99 bottles of beer on the wall.\n'].join('')

  sing: (first, last=0) ->
    verses = []
    verses.push @verse(n) for n in [first..last]
    verses.join('\n')

  verse: (n) ->
    if n > 0 then @earlyVerse(n) else @finalVerse()

global.Beer = new Beer()
