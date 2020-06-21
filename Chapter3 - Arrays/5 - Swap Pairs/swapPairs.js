// Swap positions of successive pairs of values of a given array.
// if the length is odd, do not change the final element
// Ex: [1,2,3,4] returns [2,1,4,3]

// for ['Name', true, 42] return [true, 'Name', 42]

function swapPairs(arr) {
  let temp;
  let finalIfOdd;

  if (arr.length % 2 !== 0) {
    finalIfOdd = arr[arr.length - 1];
    arr.length -= 1;
  }

  for (let i = 0; i < arr.length; i += 2) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  if (finalIfOdd) {
    //using push
    // arr.push(finalIfOdd);

    //not using push
    arr.length += 1;
    arr[arr.length - 1] = finalIfOdd;
  }

  return arr;
}

let firstArr = [1, 2, 3, 4];
let secondArr = ['hello', 1, 'world', 2];
let thirdArr = ['hello', 1, 'world', 2, true];

// console.log(swapPairs(firstArr)); //expect [2,1,4,3]
// console.log(swapPairs(secondArr)); //expect [1, 'hello', 2, 'world']
// console.log(swapPairs(thirdArr)); //expect [1, 'hello', 2, 'world', true]
