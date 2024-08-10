/**
 * You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  let arr4 = [];

  for (let i = 0; i < arr3.length; i++) {
    if (i === n) {
      arr4.push(...arr1);
    }
    arr4.push(arr3[i]);
  }

  if (n >= arr3.length) {
    arr4.push(...arr1);
  }

  return arr4;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
