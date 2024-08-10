if (num > 10) {
    return "No";
}
if (num < 5) {
    return "No";
}
return "Yes";

/**
 * will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:
 */

if (num > 10 || num < 5) {
    return "No";
}
return "Yes";


function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);