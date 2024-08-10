/**
 * Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
  let consonantStart = /^[^aeiou]/.test(str);
  let consonantPlusVowels = /[aeiou]/g.test(str);
  let vowelStart = /^[aeiou]/.test(str);
  let vowelInMiddle = undefined;
  let vowelMiddleMatch = str.match(/[aeiou]/);
  vowelMiddleMatch != null && vowelMiddleMatch.index + 1 > Math.floor(str.length / 2) ? (vowelInMiddle = true) : (vowelInMiddle = false);
  if (consonantStart == true && consonantPlusVowels == false) {
    return str + "ay";
  } else if (consonantStart == true && vowelInMiddle == false) {
    return str.slice(1) + str.charAt(0) + "ay";
  } else if (vowelStart == true) {
    return str + "way";
  } else if (consonantStart == true && vowelInMiddle == true) {
    let first = str.slice(vowelMiddleMatch.index);
    let second = str.slice(0, vowelMiddleMatch.index);
    return first + second + "ay";
  }
}

console.log(translatePigLatin("rhythm"));
