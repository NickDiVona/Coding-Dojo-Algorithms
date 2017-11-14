// given an array swap the first and last, third to third last, etc.
// [1,2,3,4,5,6,7,8,9] becomes [9,2,7,4,5,6,3,8,1]

function swapTowardsCenter(arr) {
  let temp;
  let count = 1;

  for (let i = 0; i < arr.length / 2; i += 2) {
    temp = arr[i];
    arr[i] = arr[arr.length - count];
    arr[arr.length - count] = temp;
    count += 2;
  }

  return arr;
}

console.log(swapTowardsCenter([1, 2, 3, 4, 5, 6, 7]));
