/**
 * One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:
 * */

var camper = "James";
var camper = "David";
console.log(camper);

/**
 * A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. You'll learn about other ES6 features in later challenges.

If you replace var with let in the code above, it results in an error:*/

let camper = "James";
let camper = "David";

let catName = "Oliver";
let catSound = "Meow!";