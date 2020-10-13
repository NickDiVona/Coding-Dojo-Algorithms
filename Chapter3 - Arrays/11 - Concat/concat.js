//replicate concat

function concat(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.length += 1;
    newArr[newArr.length - 1] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    newArr.length += 1;
    newArr[newArr.length - 1] = arr2[i];
  }

  return newArr;
}

console.log(concat([1, 2, 3], [7, 8, 9]));
