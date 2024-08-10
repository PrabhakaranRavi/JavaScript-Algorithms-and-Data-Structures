/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
  const array = [];
  let index = 0;
  while (index < arr.length) {
    array.push(arr.slice(index, index + size));
    index += size;
  }
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
