// set up a blank array
var arr = [];

// create the function, have it take in 2 variables
function thisLengthThatValue(first,second) {
    // check to see if the two inputs are the same
    if (first == second) {
        // if they are, log "Jinx"
        console.log("Jinx~");
        // if they aren't, loop from 0 until 1 less than the first input
    } else {
        for (var i = 0; i < first; i++) {
            // push the second value to the array the appropriate amount of times
            arr.push(second)
        }
        // log (optional) and return the array
        console.log(arr);
        return arr
    }
}
// change the values in the following call to check other cases.
thisLengthThatValue(5,2)
