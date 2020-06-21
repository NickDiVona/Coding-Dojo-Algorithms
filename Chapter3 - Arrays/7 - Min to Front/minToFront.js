// // given an array of values, move the lowest value to the front of the array
// // do not fully sort the array, just mov the lowest to the front
// // do not use any built-in array methods

// function minToFront(arr) {
//   let newArr = [];
//   let lowest;
//   let temp;

//   // loop through arr to check for lowest value
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < lowest || i === 0) {
//       lowest = arr[i];
//     }
//   }

//   // remove shuffle lowest to the back of the arr
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === lowest) {
//       if (arr[i + 1]) {
//         temp = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }

//   // remove back value from arr and add it to front of newArr
//   arr.length -= 1;
//   newArr[0] = lowest;

//   // add the rest of arr, in order, to newArr
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i + 1] = arr[i];
//   }

//   //return newArr
//   return newArr;
// }

// let firstArr = [4, 2, 1, 3, 5];

// console.log(minToFront(firstArr)); //expect [1,4,2,3,5]

function minToFront(arr) {
  let lowest = arr[0];
  let newArr = [];
  // let lowestIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
      // lowestIdx = i;
    }
  }

  newArr.push(lowest);
  let filtered = arr.filter((val) => val > lowest);
  return newArr.concat(filtered);
}

let firstArr = [4, 2, 1, 3, 5];
console.log(minToFront(firstArr)); //expect [1,4,2,3,5]
