/**
 * ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. 
Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:
 */

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

/**
 * The console will display the values of a and b as 1, 2.
 */

//const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

let g = 8, h = 6;
// Only change code below this line
[g, h] = [h, g];