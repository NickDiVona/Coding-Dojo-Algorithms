// set up the function, have it take in two parameters, array and num
function onlyKeepTheLastFew(array, num) {
    // check to make sure input array is of type array, and input num is an integer
    if (!Array.isArray(array) || !Number.isInteger(num)) {
        return false;
    } else if (num >= array.length) {
        console.log("num is greater or equal than array's length.");
        return false
    }
    // use splice and remove the values from 0 to the value of the input num
    array.splice(0,num);
    // log the modified array
    console.log(array);
    // return the modified array
    return array;
}
// call the function and pass in an array and a number
onlyKeepTheLastFew([1,2,3,4,5,6,7], 3)
