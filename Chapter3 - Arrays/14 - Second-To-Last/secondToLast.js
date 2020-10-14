// return the second to last element of an array
// if the array is too short return null

const testArr = ['hello', 'world', 'javascript', 'is', 'fun'];
const shortTest = ['hello'];

function secondToLast(arr) {
  return arr.length >= 2 ? arr[arr.length - 2] : null;
}

console.log(secondToLast(shortTest));
