/**
 * for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
 */


const ourArray = [];

for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Setup
const myArray = [];

for (let i = 1; i <= 5; i++) {
    myArray.push(i);
}
// Only change code below this line
