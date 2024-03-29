/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
// Challenge questions can be found at csbin.io/callbacks

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.

function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
// console.log(addS("pizza"));
// console.log(addS("bagel"));

// Challenge 3 ****YOU COULD OF USED THIS MORE OFTEN! *****
// Create a function called map that takes two inputs:
// 1.an array of numbers (a list of numbers)
// 2.a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' f
// unction on each element of the input array.
function map(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
// Create a function called forEach that takes an array and a callback, and runs the callback on each
// element of the array.
// forEach does not return anything.
const numberList = [1, 2, 3, 4];

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
}

forEach(numberList, addTwo);
// console.log(numberList);

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {
  const output = [];
  forEach(array, (i) => output.push(callback(i)));
  return output;
}

// console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6

const nums = [4, 2, 3];
const add = function (a, b) {
  return a + b;
};

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;

  forEach(array, (element) => {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
}

// console.log(reduce(nums, add, 0));

// Challenge 7

function intersection(...arrays) {
  function match(current, next) {
    const filtered = [];

    forEach(current, (elementOfA) => {
      if (next.includes(elementOfA)) {
        filtered.push(elementOfA);
      }
    });

    return filtered;
  }

  return reduce(arrays, match, arrays[0]);
}

// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );
// should log: [5, 15]

// Challenge 8
function union(...arrays) {
  // joins the arrays
  const newArray = arrays[0].concat(...arrays);

  // checks if an array includes an element, if not it adds that element to the array and returns the array
  function comparison(current, element) {
    if (!current.includes(element)) {
      current.push(element);
    }
    return current;
  }

  return reduce(newArray, comparison, arrays[0]);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// reduce(newArray, comaprison, arrays[0]) {
//   let accumulator = [5, 10, 15];
//
//   COMPARES EVERY ELEMENT OF CONXAT ARRAY WITH FIRST ARRAY AND PUSHES TO IT IF NOT PRESENT ALREADY
//   forEach(newArray, (element) => {
//     accumulator = comparison(accumulator, element);
//   });
//   return accumulator;
// }

// Challenge 9
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const composedObject = {};

  forEach(arrVals, (value) => {
    composedObject[value] = [];
  });

  forEach(arrCallbacks, (callback) => {
    const keys = Object.keys(composedObject);
    forEach(keys, (key) => {
      composedObject[key].push(callback(key));
    });
  });

  return composedObject;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.

// Challenge 11
function objectFilter(obj, callback) {
  const manipulatedObject = {};
  const keys = Object.keys(obj);

  forEach(keys, (key) => {
    manipulatedObject[key] = "";
    manipulatedObject[key] = callback(obj[key]);
  });

  return manipulatedObject;
}

// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

function majority(array, callback) {
  let trueResults = 0;
  let falseResults = 0;

  forEach(array, (element) => {
    if (callback(element)) {
      trueResults += 1;
    } else {
      falseResults += 1;
    }
  });

  return trueResults > falseResults;
}

// /*** Uncomment these to check your work! ***/
const isOdd = function (num) {
  return num % 2 === 1;
};
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

function prioritize(array, callback) {
  const newArray = [];

  forEach(array, (element) => {
    let counter = 0;
    if (callback(element)) {
      newArray.splice(counter, 0, element);
      counter += 1;
    } else {
      newArray.push(element);
    }
  });

  return newArray;
}

/** * Uncomment these to check your work! ** */
// const startsWithS = function (str) {
//   return str[0] === "s" || str[0] === "S";
// };
// console.log(
//   prioritize(
//     ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
//     startsWithS
//   )
// ); // should log:
// ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
// Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

function countBy(array, callback) {
  const newObject = {};

  forEach(array, (element) => {
    const elementToAdd = callback(element);

    if (!(elementToAdd in newObject)) {
      newObject[elementToAdd] = 1;
    } else {
      newObject[elementToAdd] += 1;
    }
  });

  return newObject;
}

/** * Uncomment these to check your work! ** */
// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return "even";
//     return "odd";
//   })
// ); // should log: { odd: 3, even: 2 }

// Challenge 15
// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
function groupBy(array, callback) {
  const newObject = {};

  forEach(array, (element) => {
    const elementToAdd = callback(element);

    if (!newObject[elementToAdd]) {
      newObject[elementToAdd] = [];
    }

    newObject[elementToAdd].push(element);
  });

  return newObject;
}

/** * Uncomment these to check your work! ** */
// const decimals = [1.3, 2.1, 2.4];
// const floored = function (num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
// Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

function goodKeys(obj, callback) {
  const newArray = [];
  const keys = Object.keys(obj);

  forEach(keys, (element) => {
    if (callback(obj[element])) {
      newArray.push(element);
    }
  });
  return newArray;
}

/** * Uncomment these to check your work! ** */
// const sunny = {
//   mac: "priest",
//   dennis: "calculating",
//   charlie: "birdlaw",
//   dee: "bird",
//   frank: "warthog",
// };
// const startsWithBird = function (str) {
//   return str.slice(0, 4).toLowerCase() === "bird";
// };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
// Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).

function commutative(func1, func2, value) {
  const value1 = func1(value);
  const combinedValue1 = func2(value1);

  const value2 = func2(value);
  const combinedValue2 = func1(value2);

  return combinedValue1 === combinedValue2;
}

/** * Uncomment these to check your work! ** */
// const multBy3 = (n) => n * 3;
// const divBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
// Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.
function objFilter(obj, callback) {
  const newObject = {};
  const keys = Object.keys(obj);

  forEach(keys, (element) => {
    callback(element) === obj[element]
      ? (newObject[element] = obj[element])
      : null;
  });

  return newObject;
}

/** * Uncomment these to check your work! ** */
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
// Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.
function rating(arrOfFuncs, value) {
  let trueCount = 0;

  forEach(arrOfFuncs, (func) => {
    if (func(value) === true) {
      trueCount += 1;
    }
  });

  return (trueCount / arrOfFuncs.length) * 100;
}

// /** * Uncomment these to check your work! ** */
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// // MUST LOG THESE ONE AT A TIME, NOT FOUND OUT WHY YET??
// // console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
// Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.

function pipe(arrOfFuncs, value) {
  let pipedOutput = value;

  arrOfFuncs.forEach((func) => {
    pipedOutput = func(pipedOutput);
  });

  return pipedOutput;
}

/** * Uncomment these to check your work! ** */
// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

// Challenge 21
// Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.

function highestFunc(objOfFuncs, subject) {
  const keys = Object.keys(objOfFuncs);
  let highest = null;
  let champion;

  forEach(keys, (key) => {
    const check = objOfFuncs[key](subject);

    if (check > highest) {
      highest = check;
      champion = key;
    }
  });

  return champion;
}

/** * Uncomment these to check your work! ** */
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
// Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. combineOperations should pass the starting value into the first function in the array. combineOperations should pass the value returned by the first function into the second function, and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.

function combineOperations(startVal, arrOfFuncs) {
  let pipedOutput = startVal;

  arrOfFuncs.forEach((func) => {
    pipedOutput = func(pipedOutput);
  });

  return pipedOutput;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

/** * Uncomment these to check your work! ** */
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
// Define a function myFunc that takes an array and a callback. myFunc should pass each element
// from the array (in order) into the callback. If the callback returns true, myFunc should return the
// index of the current element. If the callback never returns true, myFunc should return -1;

function myFunc(array, callback) {
  let returnValue = -1;

  forEach(array, (element) => {
    if (callback(element) === true) {
      returnValue = array.indexOf(element);
    }
  });

  return returnValue;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

// Declared earlier as isOdd
function isItOdd(num) {
  return num % 2 !== 0;
} // CLASHED WITH ANOTHER FUNCTION UNCOMMENT THIS

/** * Uncomment these to check your work! ** */
// console.log(myFunc(numbers, isItOdd)); // Output should be 1
// console.log(myFunc(evens, isItOdd)); // Output should be -1

// Challenge 24
//
// Write a function myForEach that accepts an array and a callback function.
// Your function should pass each element of the array (in order) into the callback function.
// The behavior of this function should mirror
// the functionality of the native .forEach() JavaScript array method as closely as possible.

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

/** * Uncomment these to check your work! ** */
const nums2 = [1, 2, 3];
myForEach(nums2, addToSum);
console.log(sum); // Should output 6
