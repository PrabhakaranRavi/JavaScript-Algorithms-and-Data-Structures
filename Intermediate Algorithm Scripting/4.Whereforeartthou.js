// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInANameMySolution(collection, source) {
  let finalVal = [];
  for (let i = 0; i < collection.length; i++) {
    let obj = collection[i];
    let match = [];
    for (const key in source) {
      if (source.hasOwnProperty(key) && obj.hasOwnProperty(key) && source[key] === obj[key]) {
        match.push(true);
      } else {
        match.push(false);
      }
    }
    let finalMatch = undefined;
    for (let i = 0; i < match.length; i++) {
      if (match[i] === true) {
        finalMatch = true;
      } else {
        finalMatch = false;
        break;
      }
    }
    if (finalMatch === true) {
      finalVal.push(obj);
    }
  }
  console.log(finalVal);
  return finalVal;
}

function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    return Object.keys(source).every((key) => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });
}

whatIsInAName([{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }, { bat: 2 }], { apple: 1, bat: 2 });
