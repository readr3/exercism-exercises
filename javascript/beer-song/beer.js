global.Beer = function() {
  if (!(this instanceof Beer)) {
    return new Beer();
  }
};

Beer.prototype.bottles = function(n) {
  switch (n) {
    case 0:
      return "no more bottles";
    case 1:
      return "1 bottle";
    default:
      return n + " bottles";
  }
};

Beer.prototype.pronoun = function(n) {
  if (n === 1) {
    return "it";
  } else {
    return "one";
  }
};

Beer.prototype.earlyVerse = function(n) {
  return [
    this.bottles(n) + " of beer on the wall, ",
    this.bottles(n) + " of beer.\n",
    "Take " + this.pronoun(n) + " down and pass it around, ",
    this.bottles(n - 1) + " of beer on the wall.\n"
  ].join('');
};

Beer.prototype.finalVerse = function() {
  return [
    'No more bottles of beer on the wall, ',
    'no more bottles of beer.\n',
    'Go to the store and buy some more, ',
    '99 bottles of beer on the wall.\n'
  ].join('');
};

Beer.prototype.sing = function(first, last) {
  var verses = [];

  for (var n = first; n >= (last || 0); n--) {
    verses.push(Beer.verse(n));
  }

  return verses.join('\n');
};

Beer.prototype.verse = function(n) {
  if (n > 0) {
    return this.earlyVerse(n);
  } else {
    return this.finalVerse();
  }
};

global.Beer = new Beer();
