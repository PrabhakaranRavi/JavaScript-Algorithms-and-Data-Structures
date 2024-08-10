/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */
function sumAll(arr) {
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  let orderedArr = [];
  for (let i = min; i <= max; i++) {
    orderedArr.push(i);
  }
  return orderedArr.reduce((acc, cur) => acc + cur, 0);
}

sumAll([1, 4]);
