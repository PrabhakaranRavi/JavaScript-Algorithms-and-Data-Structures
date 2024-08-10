/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */

function myReplace(str, before, after) {
  let startingCharAsLowerInBefore = /^[a-z]/.test(before);
  let startingCharAsLowerInAfter = /^[a-z]/.test(after);
  if (startingCharAsLowerInBefore == true && startingCharAsLowerInAfter == false) {
    let x = after.slice(0, 1);
    let y = after.slice(1);
    return str.replace(before, x.toLowerCase() + y);
  } else if (startingCharAsLowerInBefore == false && startingCharAsLowerInAfter == true) {
    let x = after.slice(0, 1);
    let y = after.slice(1);
    var regex = new RegExp("(" + before + ")", "i");
    return str.replace(regex, x.toUpperCase() + y);
  } else if (startingCharAsLowerInBefore == true && startingCharAsLowerInAfter == true) {
    return str.replace(before, after);
  }
}

function myReplace(str, before, after) {
  if (/^[a-z]/.test(before) && /^[^a-z]/.test(after)) {
    return str.replace(before, after.charAt(0).toLowerCase() + after.slice(1));
  } else if (/^[A-Z]/.test(before) && /^[^A-Z]/.test(after)) {
    return str.replace(new RegExp(before, "i"), after.charAt(0).toUpperCase() + after.slice(1));
  } else {
    return str.replace(before, after);
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));
