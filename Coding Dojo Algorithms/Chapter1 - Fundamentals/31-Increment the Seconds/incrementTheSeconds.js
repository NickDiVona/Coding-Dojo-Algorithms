// set up the function and give it a parameter of array
function incrementTheSeconds(array) {
    // loop through the array
    for (var i = 0; i < array.length; i++) {
        // check if the index is odd
        if (i % 2 !== 0) {
            // add one to the current value at the given index
            array[i] += 1;
        }
    }
    // log the array
    console.log(array);
    // return the array
    return array;
}
// call the function and pass in an array 
incrementTheSeconds([-1,4,7,2,65,922,-66,2,-1,-54,3])
