if (num > 5) {
    if (num < 10) {
        return "Yes";
    }
}
return "No";

/**
 * will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:
 */

if (num > 5 && num < 10) {
    return "Yes";
}
return "No";


function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {

        return "Yes";

    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);