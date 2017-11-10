// for the given array print values greater than the second value.
// return how many values that is

function greaterThanSecond(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  //optional
  console.log(`Count is: ${count}`);

  return count;
}

greaterThanSecond([1, 3, 5, 7, 9, 13]);

// if the input array is only one character, zero is returned.
