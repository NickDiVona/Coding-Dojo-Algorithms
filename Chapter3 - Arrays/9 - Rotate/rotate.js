//implement a function that takes in an array and a value.
//shift the arrays values to the right by that amount

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
      for (let i = 0; i < arr.length; i++) {
        let reduceAmount;
      }
    }

    return arr;
  }
}

console.log(rotateArr(shortArr, 2)); // [3, 4, 1, 2]
// ['blue card', 'yellow card', 'red card']
