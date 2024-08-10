/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */
function computeSCM(num1, num2) {
  let low = Math.min(num1, num2);
  let high = Math.max(num1, num2);
  for (let i = high; i <= high * low; i += high) {
    if (i % low === 0) {
      return i;
    }
  }
}
function smallestCommons(arr) {
  let x = Math.min(...arr);
  let y = Math.max(...arr);
  let SCM = 1;
  for (let i = x; i <= y; i++) {
    SCM = computeSCM(SCM, i);
  }
  return SCM;
}

smallestCommons([1, 5]);
