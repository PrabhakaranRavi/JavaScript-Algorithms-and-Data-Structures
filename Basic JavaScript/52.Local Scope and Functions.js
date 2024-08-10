/**
 * Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called lo
 */

function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();
console.log(loc);


function myLocalScope() {
    // Only change code below this line
    const myVar = "Hi";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);