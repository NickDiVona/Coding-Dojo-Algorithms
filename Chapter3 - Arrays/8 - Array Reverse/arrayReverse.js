//given a numerical array, reverse the order of values in place

let testArrEven = [1, 2, 3, 4, 5, 6];
let testArrOdd = [11, 12, 13, 14, 15];

function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];

    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }

  return arr;
}

console.log(reverse(testArrEven));
console.log(reverse(testArrOdd));
