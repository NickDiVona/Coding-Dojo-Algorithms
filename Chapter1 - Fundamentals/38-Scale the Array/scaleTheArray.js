// set up function and have it take in array and a num
function scaleTheArray(array,num) {
    // check to see if array is of type array and num is an integer
    if (!Array.isArray(array) || !Number.isInteger(num)) {
        return false;
    }
    // loop through the array
    for (var i = 0; i < array.length; i++) {
        // change the array value at the current index to itself * 5
        array[i] = array[i] * num;
    }
    // log the array with new values
    console.log(array);
    // return the array
    return array;
}
// call the function and give it an input array and a number
scaleTheArray([1,2,3,4,5],5)
