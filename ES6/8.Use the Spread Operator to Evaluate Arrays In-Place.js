/**
 * When the spread operator is used to expand an array, it takes the elements of the array and "spreads" them out, so that they can be used in places where multiple elements are expected. So in the example let array2 = [...array1]; the spread operator takes each element of array1 and creates a new array array2 with all the same elements.

For example, if you have an array arr = [1, 2, 3], you can use the spread operator to pass its elements as separate arguments to a function like this:
 */

/**
 * ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:


 */

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

/**
 * maximus would have a value of 89.

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.
 */

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

/**
 * ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
 */


// Can't use Like this...
//const spreaded = ...arr;

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]

console.log(arr2);