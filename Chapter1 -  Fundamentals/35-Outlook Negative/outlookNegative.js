// create a new, blank array
var newArray = [];
// set up function and have it take in a parameter
function outlookNegative(array) {
    // check to see if input is type Array
    if (!Array.isArray(array)) {
        return false;
    }
    // loop through the input array
    for (var i = 0; i < array.length; i++) {
        // push values to newArray after they've been converted to the negative version of themselves.
        newArray.push(-Math.abs(array[i]));
    }
    // log the new array (optional)
    console.log(newArray);
    // return the newArray
    return newArray;
}
// call the function and pass in an array
outlookNegative([1,2,-3,4,-5,6])
