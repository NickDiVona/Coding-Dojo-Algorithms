// set up a blank array called newArr
var newArr = [];
// set up function double and give it a parameter of array
function double(array) {
    // check to see if input is of type Array
    if (!Array.isArray(array)) {
        return false
    // if it is of type Array, do the following
    } else {
        // loop though the passed in array
        for (var i = 0; i < array.length; i++) {
            // double the values and push them into the new array, newArr
            newArr.push(array[i] * 2);
        }
        // log the newArr, optional
        console.log(newArr);
        // return the newArr
        return newArr
    }
}
// call the function and pass in an array
double([2,5,11])
