// your function should accept an array
// if the first value is greater than the arrays length, print "too big"
// if the value is less than array's length, print "too small"
// otherwise print "just right"

function fitTheFirstValue(arr) {
  if (arr[0] > arr.length) {
    console.log('Too big!');
  } else if (arr[0] < arr.length) {
    console.log('Too small!');
  } else {
    console.log('Just right!');
  }
}

fitTheFirstValue([5, 4, 3, 2, 1]);
