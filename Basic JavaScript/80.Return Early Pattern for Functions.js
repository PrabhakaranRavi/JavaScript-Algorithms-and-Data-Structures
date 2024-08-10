/**
 * When a return statement is reached, the execution of the current function stops and control returns to the calling location.
 */

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
}
myFun();

/**
 * The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
 */


// Setup
function abTest(a, b) {
    // Only change code below this line

    switch (true) {
        case a < 0 || b < 0:
            return undefined;
        case a > 0 || b > 0:
            return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
        default:
            return 0;
    }

    // Only change code above this line


}

abTest(2, 2);