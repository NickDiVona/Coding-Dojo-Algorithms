// given an array create and return a new one containing
// all the values of the provided array, made negative.
// do not just multiply each positive value by -1

function outlookNegative(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i] - arr[i] * 2);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(outlookNegative([-1, 2, 3, -4, 5]));

/*
  // es6 method of doing so, using the map function.

  function outlookNegative(arr) {
    return arr.map(value => {
      if (value > 0) {
        // makes value negative without multiplying by -1
        return value - value * 2;
      }
      return value;
    });
  }

  console.log(outlookNegative([-1, 2, 3, -4, 5]));
*/
