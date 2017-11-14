// you are passed an array containing strings
// working within that same array, replace each string with a number
// the length of the string at the previous array index. then return the array.

// the code will break as there is no previous index before arr[0].
// instead I put the final index's length in place of the first.
// so [1,2,3,4] becomes [4,1,2,3]

// CURRENTLY BROKEN

function previousLengths(arr) {
  let temp;
  const tempArr = arr;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      temp = arr[i];
      arr[i] = arr[arr.length - 1];
    } else if (i !== 0) {
      arr[i] = tempArr[i - 1];
    }
  }

  return arr;
}

console.log(previousLengths(['Nick', 'Gabby', 'Braydon', 'Bennedict']));
