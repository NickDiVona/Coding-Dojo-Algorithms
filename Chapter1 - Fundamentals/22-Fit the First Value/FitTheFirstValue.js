// set up the function. Give it an parameter of array.
function fitTheFirstValue(inputArr) {
    // check to see if given input is of type Array or not.
    if (!Array.isArray(inputArr)) {
        console.log("Input is not an array.");
        return false;
    } else {
        if (inputArr[0] > inputArr.length) {
            console.log("Too big");
        } else if (inputArr[0] < inputArr.length) {
            console.log("Too small");
        } else {
            console.log("Just right");
        }
    }
}
// change the values to change the output
fitTheFirstValue([5,2,3,4,1])
