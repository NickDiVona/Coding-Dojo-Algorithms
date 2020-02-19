// set up the function, have it take in a parameter array
function reverseArray(array) {
  // make sure input is of type array
  if (!Array.isArray(array)) {
    return false;
  }
  // declare a temp variable
  var temp;
  // declare a count variable and set it equal to 1
  var count = 1;
  // loop through the array
  for (var i = 0; i < array.length / 2; i++) {
    // set temp to be the value at the current index
    temp = array[i];
    // set value of the current index to the value of the index equal to the length of the array minus the value of count
    array[i] = array[array.length - count];
    // set the value of the index equal to the length of the array minus the value of the count to the value of temp
    array[array.length - count] = temp;
    // incremement count
    count += 1;
  }
  // return the array, the values will be flipped
  return array;
}
// call the function and pass in an array
console.log(reverseArray([1, 2, 3, 4, 5]));
