// given an array, an index, and an additional value.
// insert the value into the array at the given index.

const sampleArr = [2, 9, 15, 4, 8];
const insertionIndex = 3;
const sampleValue = 100;

function insertAt(arr, idx, val) {
  if (idx > arr.length || idx < 0) {
    console.log('Insertion index out of bounds of array.');
    return;
  }
  arr.length += 1;
  // arr[arr.length - 1] = 'cheese';

  let i = arr.length - 1; //4
  while (i > idx - 1) {
    arr[i] = arr[i - 1];
    i -= 1;
  }
  arr[idx] = val;
}

insertAt(sampleArr, insertionIndex, sampleValue);
console.log(sampleArr);

/* 
  Faster way to do this.

  use array.splice(idx, overwriteNum, insertionValue)

  idx = index to start insertion at
    if idx > array.length
      array.length += 1
      array[array.length - 1] = insertionValue
      
  overwriteNum = range of values which will be overridden
    if overwriteNum === 0  
      value is inserted and no values are overwritten

  insertionValue = value placed into the array at the idx index.
*/
