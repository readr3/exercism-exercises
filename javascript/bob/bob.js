Bob = function() {
  this.hey = function(phrase) {
    switch (true) {
      case this.isSilent(phrase):
        return 'Fine, be that way.';
      case this.isShouting(phrase):
        return 'Woah, chill out!';
      case this.isAskingAQuestion(phrase):
        return 'Sure';
      default:
        return 'Whatever';
    }
  };

  this.isSilent = function(phrase) {
    return phrase === '';
  };

  this.isShouting = function(phrase) {
    return phrase.toUpperCase() === phrase;
  };

  this.isAskingAQuestion = function(phrase) {
    return (/\?$/).test(phrase);
  };
};