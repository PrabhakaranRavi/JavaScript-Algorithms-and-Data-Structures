/**
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
 */

function truthCheck(collection, pre) {
  let finalVal = undefined;
  for (let user in collection) {
    if (collection[user][pre] === false || collection[user][pre] === "" || collection[user][pre] === 0 || Number.isNaN(collection[user][pre]) || collection[user][pre] === undefined || collection[user][pre] === null) {
      finalVal = false;
      break;
    } else if (collection[user].hasOwnProperty(pre)) {
      finalVal = true;
    }
  }
  return finalVal;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);

function truthCheck(collection, pre) {
  return collection.every((obj) => obj.hasOwnProperty(pre) && Boolean(obj[pre]));
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);
