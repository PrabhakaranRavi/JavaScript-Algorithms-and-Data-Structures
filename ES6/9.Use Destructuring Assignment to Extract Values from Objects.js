const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;

const { name, age } = user;

/**
 * Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
 */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
