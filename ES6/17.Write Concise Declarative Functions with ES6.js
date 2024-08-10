/**
 * When defining functions within objects in ES5, we have to use the keyword function as follows:
 */

const person = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};

// const person = {
//     name: "Taylor",
//     sayHello() {
//         return `Hello! My name is ${this.name}.`;
//     }
// };

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);