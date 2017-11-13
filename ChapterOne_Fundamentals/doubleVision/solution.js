// given an array create a function to return a new array where each value in the original has been doubled.
// ex: [1,2,3] return [2,4,6]

function double(arr) {
  return arr.map(function(arr) {
    return arr * 2;
  });
}

console.log(double([1, 2, 3, 4, 5]));
