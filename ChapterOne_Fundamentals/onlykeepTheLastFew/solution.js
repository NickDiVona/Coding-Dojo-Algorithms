// reducing an array's length shortens the array (duh)
// given an array and a number remove all except the last
// remove([1,2,3,4,5],3) returns [3,4,5]

function remove(arr, num) {
  let temp = num;

  // move 'num' amount of numbers to the front
  for (let i = 0; i < num; i++) {
    arr[i] = arr[arr.length - temp];
    temp--;
  }

  // trim the length off the array
  arr.length = num;

  return arr;
}

console.log(remove([1, 2, 3, 4, 5, 6, 7], 3));
