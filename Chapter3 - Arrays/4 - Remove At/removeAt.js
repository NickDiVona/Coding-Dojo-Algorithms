//  Given an array and an index, remove and return the array value at the given index.
//  Do not use built-in methods except pop(). You must use pop()

const someArray = [1, 2, 3, 4, 5, 6, 7, 8];

function removeAt(arr, idx) {

  // declare base variables
  let temp;
  let toReturn;
  let diffRange = arr.length - idx;

  // shift value at idx with end value on array
  temp = arr[arr.length - 1]
  arr[arr.length - 1] = arr[idx]
  arr[idx] = temp

  // pop off the end value, which is originally the value of the index at array[idx]
  // set toReturn to the popped value
  toReturn = arr.pop()

  // loop through the latter part of the array starting at the idx value.
  // shift the values back into place
  for (let i = 1; i < diffRange; i += 1) {
    temp = arr[arr.length - i]
    arr[arr.length - i] = arr[idx]
    arr[idx] = temp
  }

  return toReturn
}

console.log(removeAt(someArray, 2));
