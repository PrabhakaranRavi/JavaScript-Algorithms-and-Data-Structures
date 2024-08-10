/**
 * Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
 */

const myObj = {
    top: "hat",
    bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");


function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty([checkProp]) === true) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }

    // Only change code above this line
}