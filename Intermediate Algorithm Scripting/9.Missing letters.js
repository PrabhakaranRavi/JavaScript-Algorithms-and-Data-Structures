/**
 * Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  let fullString = "abcdefghijklmnopqrstuvwxyz";
  let strStart = fullString.indexOf(str.charAt(0));
  let strEnd = fullString.indexOf(str.charAt(str.length - 1));
  let checkString = fullString.slice(strStart, strEnd + 1);
  let finalString = " ";
  for (let i = 0; i < checkString.length + 1; i++) {
    let position = str.search(checkString[i]);
    if (position == -1) {
      finalString = checkString[i];
      break;
    } else {
      finalString = undefined;
    }
  }
  return finalString;
}

fearNotLetter("abce");

function fearNotLetter(str) {
  let checkString = "abcdefghijklmnopqrstuvwxyz".slice("abcdefghijklmnopqrstuvwxyz".indexOf(str[0]), "abcdefghijklmnopqrstuvwxyz".indexOf(str[str.length - 1]) + 1);
  let finalString = undefined;
  for (let letter of checkString) {
    if (!str.includes(letter)) {
      finalString = letter;
      break;
    }
  }
  return finalString;
}

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let checkString = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1]) + 1);
  let missingLetter = Array.from(checkString).find((letter) => !str.includes(letter));
  return missingLetter || undefined;
}

fearNotLetter("abce");
