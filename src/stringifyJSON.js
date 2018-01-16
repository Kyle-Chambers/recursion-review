// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];



// // used for stringifyJSON spec
// // hint: JSON does not allow you to stringify functions or
// // undefined values, so you should skip those key/value pairs.
// unstringifiableValues = [
//   {
//     'functions': function() {},
//     'undefined': undefined
//   }
// ];

// but you don't so you're going to write it from scratch:


// JSON.stringify() converts a value to JSON notation representing it:
//
// Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.
// If undefined, a function, or a symbol is encountered during conversion it is either omitted (when it is found in an object) or censored to null (when it is found in an array). JSON.stringify can also just return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).
// All symbol-keyed properties will be completely ignored, even when using the replacer function.
// Non-enumerable properties will be ignored
var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  }

  if (typeof obj === 'function' || obj === undefined) {
    return null;
  }

  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }

  if (obj === null){
    return "null";
  }

  if (Array.isArray(obj)){
    var arrayContent = [];

    obj.forEach(function(element){
      arrayContent.push(stringifyJSON(element));
    });

    return '[' + arrayContent.join(',') + ']';
  }

  if (typeof obj === 'object'){
    var objectContent = [];

    for (var key in obj){
      if (stringifyJSON(obj[key])){
        objectContent.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + objectContent.join(',') +'}';
  }
};

console.log(stringifyJSON({'foo': true, 'bar': false, 'baz': null}));

//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
