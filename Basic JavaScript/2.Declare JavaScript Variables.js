var myName;

let x;
console.log(x);  // Output: undefined (x has not been assigned a value)

let y = null;
console.log(y);  // Output: null (y has been explicitly set to null)


/**
In programming, "undefined" and "null" are both values that indicate the absence of a value or a null value. However, they are not the same thing and have some important differences.

undefined: Indicates that a variable has not been assigned a value. It is a primitive data type in JavaScript and is the default value of uninitialized variables.

null: Indicates that a value is intentionally absent. It is a primitive data type in JavaScript and is often used to represent the absence of a value when the value is known to be missing or empty.

Here are some examples to illustrate the difference between "undefined" and "null":
*/

/** 
In the first example, the variable x has not been assigned a value, so it has a value of "undefined". In the second example, the variable y has been explicitly set to the value "null".

It's important to note that "undefined" and "null" are not the same as false, 0, or an empty string, which are all values that are considered "falsy" in JavaScript. "Undefined" and "null" are their own distinct data types and have their own unique characteristics.
 */

/** 
In programming, an object is a data type that represents a collection of properties and their values. Objects are used to store and organize data in a structured way, and can represent real-world objects such as a person, a place, or a thing.

An object is created using curly braces {}, and its properties are defined as key-value pairs within the braces. The keys are used to identify the properties, and the values are the data associated with those properties.

Here's an example of an object in JavaScript:

Copy code
*/

let person = {
    name: 'John',
    age: 30,
    occupation: 'teacher'
};

/** 
In this example, the object person has three properties: name, age, and occupation, each with their own associated values.

You can access the properties of an object using the dot notation or the square bracket notation:

Copy code

*/
console.log(person.name);  // Output: 'John'
console.log(person['age']);  // Output: 30

/** 
Objects are a fundamental data type in many programming languages and are used to store and manipulate data in a wide variety of applications.
*/