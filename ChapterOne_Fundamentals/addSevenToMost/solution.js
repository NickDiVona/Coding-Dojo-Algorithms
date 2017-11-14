// build a function that accepts an array
// return a new array with all values except the first, adding 7 to each
// do not alter the original array

function addSevenToMost(arr) {
  let newArr = [];
  // start at 1 instead of 0 to skip first value
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i] + 7);
  }
  return newArr;
}

console.log(addSevenToMost([1, 2, 3, 4, 5]));
