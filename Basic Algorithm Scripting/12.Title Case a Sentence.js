/**
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
 */

function titleCase(str) {
  let strLen = str.split(" ");
  for (let i = 0; i < strLen.length; i++) {
    strLen[i] = strLen[i].charAt(0).toUpperCase() + strLen[i].slice(1).toLowerCase();
  }
  return strLen.join(" ");
}

titleCase("I'm a little tea pot");

//https://flexiple.com/javascript/javascript-capitalize-first-letter/
