/**
 * Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.
 */

function foo(x) {
    if (x < 1) {
        return "Less than one";
    } else if (x < 2) {
        return "Less than two";
    } else {
        return "Greater than or equal to two";
    }
}

function bar(x) {
    if (x < 2) {
        return "Less than two";
    } else if (x < 1) {
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}

foo(0)
bar(0)

/**
 * foo(0) will return the string Less than one, and bar(0) will return the string Less than two.
 */

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);