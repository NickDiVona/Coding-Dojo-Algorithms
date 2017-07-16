// set up function and take in an array as a parameter
function makeItBig(array) {
    // check to see if the input is an array or not
    if(!Array.isArray(array)) {
        console.log("Input is not type Array");
        return false;
        // if it is not do this
    } else {
        // loop through the array
        for (var i = 0; i < array.length; i++) {
            // check to see if index is greater than 0
            if (array[i] > 0) {
                // if it is, change the value to "big"
                array[i] = "big";
            }
        }
        // log the array, optional
        console.log(array);
        // return the array
        return array
    }
}
// call the function and pass in an array
makeItBig([1,-1,11,-2,0,19999])
