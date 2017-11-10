// given an array return the first value of the array + the array's length
// what happens if you enter in non-numbers into the array?

function firstPlusLength(arr) {
  return arr[0] + arr.length;
}

console.log(firstPlusLength([5, 7, 9, 10]));
console.log(firstPlusLength(['hello', 'goodbye']));
console.log(firstPlusLength([true, false]));
