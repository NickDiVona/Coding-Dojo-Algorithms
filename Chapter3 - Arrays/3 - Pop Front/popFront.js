//  Given an array, remove and return the value at the beginning of the array.
//  Do this without using any built in methods besides array.pop()
//    By default pop() removes the last value in the array

const someArr = [2, 4, 6, 8, 10];

function popFront(arr) {
  let temp;
  let i = arr.length - 1;

  while (i > 0) {
    temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    i--;
  }

  return arr.pop();
}

console.log(popFront(someArr));
