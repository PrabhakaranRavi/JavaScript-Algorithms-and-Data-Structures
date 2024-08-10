/**
 * Return the length of the longest word in the provided sentence.

Your response should be a number.
 */

function findLongestWordLength(str) {
  let newArr = str.split(" ");
  let count = 0;
  for (let word of newArr) {
    if (word.length > count) {
      count = word.length;
    }
  }
  return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
