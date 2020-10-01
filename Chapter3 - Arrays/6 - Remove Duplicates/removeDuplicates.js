// Given an array containing sorted elements, return an array with removed duplicates
// Do not use nested loops

function removeDuplicates(arr) {
  let newArr = [];
  let nextVal;

  for (let i = 0; i < arr.length; i++) {
    nextVal = arr[i + 1];
    if (arr[i] !== nextVal) {
      //better way
      newArr.push(arr[i]);
      nextVal = arr[i];
    }
  }

  return newArr;
}

let firstTest = [1, 2, 3, 4];
let secondTest = [1, 2, 2, 3, 4];
let thirdTest = ['hello', 'hello', 'world', 'world'];
let fourthTest = ['hello', 'helo', 'world'];

console.log(removeDuplicates(firstTest)); // expect [1,2,3,4]
console.log(removeDuplicates(secondTest)); //expect [1,2,3,4]
console.log(removeDuplicates(thirdTest)); //expect ['hello', 'world']
console.log(removeDuplicates(fourthTest)); //expect ['hello', 'helo', 'world']
