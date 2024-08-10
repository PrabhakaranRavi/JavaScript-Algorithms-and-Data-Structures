/**
 * In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
 */

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards


let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else if (count <= 0) {
        return count + " Hold";
    }

    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


//let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else if (count <= 0) {
        return count + " Hold";
    }
    // Only change code above this line
}

console.log(cc(2)); // Bet
console.log(cc(3)); // Bet
console.log(cc(7)); // Hold
console.log(cc('K')); // Hold
console.log(cc('A')); // Hold

console.log(count); // 0


function cc(card) {
    const values = {
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 0,
        8: 0,
        9: 0,
        10: -1,
        J: -1,
        Q: -1,
        K: -1,
        A: -1,
    };

    count += values[card];

    if (count > 0) {
        return count + " Bet";
    } else if (count <= 0) {
        return count + " Hold";
    }
}


function cc(card) {
    const values = {
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 0,
        8: 0,
        9: 0,
        10: -1,
        J: -1,
        Q: -1,
        K: -1,
        A: -1,
    };

    count += values[card];

    return count > 0 ? count + " Bet" : count + " Hold";
}

