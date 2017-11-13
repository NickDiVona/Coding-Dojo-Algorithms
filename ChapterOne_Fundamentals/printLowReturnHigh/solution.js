// create a function that takes an array of numbers
// print the lowest value, and return the highest.

function printLowReturnHigh(arr) {
  let highest = arr[0];
  let lowest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }

    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }

  console.log(lowest);
  return highest;
}

printLowReturnHigh([-1, 5, 7, -5, 11, 2]);
