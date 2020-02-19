// set up variables
var lowest;
var highest;
// set up function with parameter array
function printLowReturnHigh(array) {
    // check to see if input is of type Array
    if (!Array.isArray(array)) {
        return false;
    // if not
    } else {
        // set lowest & highest to first value
        lowest = array[0];
        highest = array[0];
        // loop through array
        for (var i = 0; i < array.length; i++) {
            // check to see if value at current index higher than highest
            if (array[i] > highest) {
                // if so, set highest to the value at current index
                highest = array[i];
            // check to see if value at current index is less than lowest
            } else if (array[i] < lowest) {
                // if so, set lowest to the value at current index
                lowest = array[i];
            }
        }
        // log the lowest value
        console.log(`lowest is ${lowest}`);
        /*
        console.log(`highest is ${highest}`);
        */
        // return the highest
        return highest
    }
}
// call the function and pass in an array
printLowReturnHigh([1,5,8,3,2,347,65,4,-5,3,2,200])
