/**
 * Like the equality operator, the greater than or equal to operator will convert data types while comparing.
 */

6 >= 6  // true
7 >= '3' // true
2 >= 3  // false
'7' >= 9  // false

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);