// set up function and gave it a parameter of array
function countPositives(array) {
    // declare variable count and give it a value of 0
    var count = 0;
    // check to see if passed in value is of type array
    if (!Array.isArray(array)) {
        return false;
    // if it is an array, do the following
    } else {
        // loop through the array
        for (var i = 0; i < array.length; i++) {
            // check if the value at the current index is greater than zero
            if (array[i] > 0) {
                // add 1 to the count variable
                count += 1;
            }
        }
        // change the final value in the array to the value of count
        array[array.length-1] = count;
        // log the array, optional
        console.log(array);
        // return the modified array
        return array;
    }
}
// call the function and pass in an array
countPositives([1,-3,-6,9,1])
