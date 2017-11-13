// write a function that converts all positive values in an array to "big"

function biggieSize(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = 'big';
    }
  }

  return arr;
}

console.log(biggieSize([3, -6, 7, 8, -40, 3, 0]));
