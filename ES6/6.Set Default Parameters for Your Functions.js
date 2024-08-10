/**
 * In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:
 */

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

/**
 * The console will display the strings Hello John and Hello Anonymous.
 */

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line