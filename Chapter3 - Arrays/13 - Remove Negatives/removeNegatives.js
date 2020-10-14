// implement a function that accepts an array, removes the negative values, and returns the same array
// preserve the orderof the array with the negatives removed
// do not use built ins

let someArr = [-1, 5, 6, -20, -3, 2, 4];

function removeNegatives(arr) {
  let negCount = 0;
  let temp;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < 0) {
      negCount += 1;
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  if (negCount !== 0) {
    negCount = 0;
    arr.length -= 1;
    removeNegatives(arr);
  }

  return arr;
}

console.log(removeNegatives(someArr));
