/**
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */
function dropElements(arr, func) {
  let finalArr = [...arr];
  let x;
  for (let i = 0; i < arr.length; i++) {
    let val = func(arr[i]);
    if (val === true) {
      x = i;
      break;
    }
  }
  if (x >= 0) {
    return finalArr.slice(x);
  } else {
    return [];
  }
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
