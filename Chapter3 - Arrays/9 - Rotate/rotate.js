//implement a function that takes in an array and a value.
//shift the arrays values to the right by taht amount

let shortArr = [1, 2, 3, 4];
let longArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function rotateArr(arr, shiftBy) {
  let actualRotation = shiftBy;

  if (arr.length === shiftBy) {
    return arr;
  } else {
    if (shiftBy > arr.length) {
      if (shiftBy % arr.length === 0) {
        return arr;
      } else {
        actualRotation = shiftBy % arr.length;

        rotateArr(arr, actualRotation);
      }
    } else {
      for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
        temp = arr[i];
        arr[i] = arr[i - shiftBy];
        arr[i - shiftBy] = temp;
        // let temp = arr[i];
        // arr[i] = arr[i + shiftBy - 1];
        // arr[i + shiftBy - 1] = temp;
        //   let wrapAroundValue;
        //   let shiftedValue = i + shiftBy - 1;
        //   let temp = arr[i];
      }
    }

    return arr;
  }
}

console.log(rotateArr(shortArr, 2));
