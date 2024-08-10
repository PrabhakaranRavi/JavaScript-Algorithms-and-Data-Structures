/**
 * At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). Take a look at an example:
 */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line

// Only change code above this line

console.log((foods.bananas = 13), (foods.grapes = 35), (foods.strawberries = 27));

const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};

tekkenCharacter.origin = "South Korea";

/**
 * This uses dot notation. If you were to observe the tekkenCharacter object, it will now include the origin property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:
 */

tekkenCharacter["hair color"] = "dyed orange";
