/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
 */
function uniteUnique(arr) {
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === arguments[0]) {
      let arr = arguments[0].filter((c, i) => arguments[0].indexOf(c) === i);
      finalArray = finalArray.concat(arr);
    }
  }
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      let val = false;
      for (let k = 0; k < finalArray.length; k++) {
        if (arguments[i][j] === finalArray[k]) {
          val = true;
          break;
        } else if (arguments[i][j] !== finalArray[k]) {
          val = false;
        }
      }
      if (val == false) {
        finalArray.push(arguments[i][j]);
      }
    }
  }
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function uniteUnique(...arr) {
  let set = new Set();
  arr.flat().forEach((num) => set.add(num));
  return Array.from(set);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
