global.Beer = function() {};

Beer.bottles = function(n) {
  switch (n) {
    case 0:
      return "no more bottles";
    case 1:
      return "1 bottle";
    default:
      return n + " bottles";
  }
};

Beer.pronoun = function(n) {
  if (n === 1) {
    return "it";
  } else {
    return "one";
  }
};

Beer.earlyVerse = function(n) {
  return [
    Beer.bottles(n) + " of beer on the wall, ",
    Beer.bottles(n) + " of beer.\n",
    "Take " + Beer.pronoun(n) + " down and pass it around, ",
    Beer.bottles(n - 1) + " of beer on the wall.\n"
  ].join('');
};

Beer.finalVerse = function() {
  return [
    'No more bottles of beer on the wall, ',
    'no more bottles of beer.\n',
    'Go to the store and buy some more, ',
    '99 bottles of beer on the wall.\n'
  ].join('');
};

Beer.sing = function(first, last) {
  var verses = [];

  for (var n = first; n >= (last || 0); n--) {
    verses.push(Beer.verse(n));
  }

  return verses.join('\n');
};

Beer.verse = function(n) {
  if (n > 0) {
    return Beer.earlyVerse(n);
  } else {
    return Beer.finalVerse();
  }
};