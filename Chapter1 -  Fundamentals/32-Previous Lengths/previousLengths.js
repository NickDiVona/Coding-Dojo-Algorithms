// you are passed an array containing strings working within that same array replace each string with a number the length of the string at the previous array index, then return the array

function previousLengths(array) {
  for (var i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1].length;
  }
  return array;
}
console.log(previousLengths(['there', 'is', 'no', 'cow', 'level']));
