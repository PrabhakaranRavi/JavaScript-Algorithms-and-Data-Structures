/**
 * You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:
 */

ourDog.bark = "bow-wow";

ourDog["bark"] = "bow-wow";

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog["bark"] = "woof";
