// given arr, add 1 to every odd element.
// not every element with an odd value.

function incrementTheSeconds(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(i % 2 === 0)) {
      arr[i]++;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
  }

  return arr;
}

incrementTheSeconds([9, 7, 5, 3, 1, 8, 6, 4, 2]);
