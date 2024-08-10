/**
 * Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

function pairElement(str) {
  let finalArray = [];
  for (let i = 0; i < str.length; i++) {
    finalArray[i] = [str[i]];
    for (let j = 0; j < 1; j++) {
      if (str[i] == "G") {
        finalArray[i].push("C");
      } else if (str[i] == "C") {
        finalArray[i].push("G");
      } else if (str[i] == "A") {
        finalArray[i].push("T");
      } else if (str[i] == "T") {
        finalArray[i].push("A");
      }
    }
  }
  return finalArray;
}
pairElement("GCG");

function pairElement(str) {
  const pairs = {
    G: "C",
    C: "G",
    A: "T",
    T: "A",
  };
  return str.split("").map((char) => [char, pairs[char]]);
}

pairElement("GCG");
