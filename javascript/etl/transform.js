'use strict';

exports.transform = function(extracted) {
  var load = {};

  function fill(letter, i, letters) {
    load[letter.toLowerCase()] = score;
  }

  for ( var score in extracted ) {
    if (extracted.hasOwnProperty(score)) {
      extracted[score].forEach( fill );
    }
  }
  
  return load;
};