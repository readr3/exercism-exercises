exports.transform = function(input) {
  'use strict';

  var transformedObject = {};

    for (var key in input) {
      if (input.hasOwnProperty(key)) {
        var currentValues = input[key];

        for (var i = 0; i < currentValues.length; i++) {
          var currentValue = currentValues[i].toLowerCase();
          transformedObject[currentValue] = key;
        }
      }
    }
    return transformedObject;
};