// given an array of numbers create a function to replace the last value with the # of positive values.

function countPositives(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }

  arr[arr.length - 1] = count;
  return arr;
}

console.log(countPositives([-1, 1, 1, 1]));
