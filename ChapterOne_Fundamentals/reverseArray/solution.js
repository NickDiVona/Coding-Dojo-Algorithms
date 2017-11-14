// given an array write a function that reverses values in place
// [1,2,3,4,5] becomes [5,4,3,2,1]

function reverse(arr) {
  let temp;
  let tempArr = [];
  let count = 1;

  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - count];
    arr[arr.length - count] = temp;
    count++;
  }

  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));
