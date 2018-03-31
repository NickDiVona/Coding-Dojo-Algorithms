// push a number to the beginning of an array without using built in methods.

function pushFront(arr, num) {
  arr.length = arr.length + 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = num;
}

const sampleArr = [1, 10, 20, 2, 7];
const sampleNum = 5;

pushFront(sampleArr, sampleNum);

console.log(sampleArr);

// //faster way using built in functions
// const newArr = [2, 3, 4, 5];
// newArr.unshift(1);
