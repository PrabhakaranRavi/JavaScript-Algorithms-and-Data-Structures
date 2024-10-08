/**
 * Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object
 */

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstAndLast1 = `${firstAndLast}`;
  this.setFirstName = function (name) {
    let first = firstAndLast1.split(" ")[0];
    let second = firstAndLast1.split(" ")[1];
    first = name;
    firstAndLast1 = first + " " + second;
    return first + " " + second;
  };
  this.setLastName = function (name) {
    let first = firstAndLast1.split(" ")[0];
    let second = firstAndLast1.split(" ")[1];
    second = name;
    firstAndLast1 = first + " " + second;
    return first + " " + second;
  };
  this.setFullName = function (name) {
    firstAndLast1 = name;
    return firstAndLast1;
  };
  this.getFirstName = function () {
    return firstAndLast1.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast1.split(" ")[1];
  };
  this.getFullName = function () {
    return firstAndLast1;
  };
  return firstAndLast;
};

const bob = new Person("Bob Ross");
bob.getFullName();
