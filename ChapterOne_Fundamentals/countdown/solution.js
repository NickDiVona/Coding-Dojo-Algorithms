// create a function that accepts an array as an input.
// return a new array that counts down by one from the number down to 0.
// how long is this array

function countdown(num) {
  let arr = [];

  for (let i = num; i >= 0; i--) {
    arr.push(i);
  }
  console.log(`Length is ${arr.length}`);
  return arr;
}

console.log(countdown(5));
