/**
 * As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.
 */

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};

/**
 * The myMap method takes a callback function as its argument, just like the built-in map method. The method creates a new empty array called newArray, and then iterates over each element in the array using a for loop. For each element, it calls the callback function and passes in three arguments:

the current element of the array
the current index of the element
the entire array
The callback function can use these arguments to perform some operation on the element, and then the result is pushed into the newArray.

Finally, the method returns the newArray, which contains the mapped values.

You can use this implementation just like you would use the built-in map method:
 */
const arr = [1, 2, 3, 4, 5];
const newArr = arr.myMap((num) => num * 2);
console.log(newArr); // [2, 4, 6, 8, 10]
