/**
 * You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:
 */

const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

const { johnDoe: { age, email } } = user;

const { johnDoe: { age: userAge, email: userEmail } } = user;

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

  // Only change code above this line