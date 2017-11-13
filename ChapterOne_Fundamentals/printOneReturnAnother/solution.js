// create a function that takes in an array of numbers.
// the function should print the second to last value in the array
// return the first odd value in the array

function printOneReturnAnother(arr) {
  console.log(arr[arr.length - 2]);

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2 === 0)) {
      return arr[i];
    }
  }
}

console.log(printOneReturnAnother([6, 8, -40, 2, -5, 17, 0, 4]));
