// set up function and have it taken in a parameter array
function printOneReturnAnother(array) {
    // check to see if input is of type Array
    if (!Array.isArray(array)) {
        return false
    // otherwise, do this
    } else {
        // log the value at the second to last place in the array
        console.log(`${array[array.length-2]} is the 2nd to last value.`);
        // loop through the array
        for (var i = 0; i < array.length; i++) {
            // check to see if the value at the current index is odd
            if (array[i] % 2 != 0) {
                // if so, return the value at that index
                return array[i]
            }
        }
    }
}
// call the function and pass in an array
printOneReturnAnother([76,46,-100,0,11,300,5555,1,2,4,-99])
