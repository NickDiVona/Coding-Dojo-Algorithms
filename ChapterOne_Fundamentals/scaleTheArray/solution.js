// given an array and a number multiply all values in the array by the number
// returned the array changed

function scale(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }

  return arr;
}

console.log(scale([1, 2, 3, 4, 5], 2));
