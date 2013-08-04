exports.sing = (start, end) ->
  end = 0 if typeof end == 'undefined'
  verses start, end

exports.verse = verse = (n) ->
  firstLine.sing(n) + secondLine.sing(n)

verses = (start, end) ->
  result = []
  for i in [start..end]
    result.push verse(i)
  result.join "\n"

firstLine = {
  base: "{0} {1} of beer on the wall, {0} {1} of beer.\n"
  zero: "No more bottles of beer on the wall, no more bottles of beer.\n"
  sing: (bottles) ->
    if bottles == 0
      @zero
    else if bottles == 1
      interpolate @base, '1', 'bottle'
    else
      interpolate @base, bottles, 'bottles'
}

secondLine = {
  base: "Take one down and pass it around, {0} {1} of beer on the wall.\n"
  zero: "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
  one:  "Take it down and pass it around, no more bottles of beer on the wall.\n"
  sing: (bottlesLeft) ->
    if bottlesLeft == 0
      @zero
    else if bottlesLeft == 1
      @one
    else if bottlesLeft == 2
      interpolate @base, '1', 'bottle'
    else
      interpolate @base, bottlesLeft - 1, 'bottles'
}

interpolate = (s) ->
  for i in [0..(arguments.length-1)]
    regex = new RegExp "\\{" + i + "\\}", "g"
    s = s.replace regex, arguments[i+1]
  s