/**
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

function sumFibs(num) {
  let finalArray = [0, 1];
  let first = 0;
  let second = 1;
  let last = 0;
  for (let i = 0; i < num; i++) {
    last = first + second;
    finalArray.push(last);
    first = second;
    second = last;
  }

  let oddNum = finalArray.filter((numb) => numb % 2 != 0 && numb <= num);
  return oddNum.reduce(function (x, y) {
    return x + y;
  }, 0);
}
function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    let next = curr + prev;
    prev = curr;
    curr = next;
  }
  return sum;
}
sumFibs(4);
