// when given an array containing strings replace each string with a number
// the length of the string at the previous array index
// return the array

function previousLengths(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(i === 0)) {
      arr[i] = arr[i - 1].length;
    }
  }

  return arr;
}

console.log(previousLengths(['Nick', 'Gabby', 'Braydon', 'Michael']));
