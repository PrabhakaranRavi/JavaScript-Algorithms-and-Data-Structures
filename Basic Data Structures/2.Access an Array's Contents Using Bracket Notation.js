let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "P";
let myValueAtIndex2 = myArray[2];
// Only change code above this line
console.log(myArray);

/**
 * In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first.
 * In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object.
 * This is known as bracket notation. For example, if we want to retrieve the a from ourArray and assign it to a variable, we can do so with the following code:
 */
