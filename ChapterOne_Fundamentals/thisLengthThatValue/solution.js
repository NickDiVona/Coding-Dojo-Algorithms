// given two numbers return an array of length num1 with each value num2
// print "jinx" if they are the same

const num1 = 7;
const num2 = 4;

function thisLengthThatValue(num1, num2) {
  let arr = [];

  for (let i = 0; i < num1; i++) {
    arr.push(num2);

    if (num1 === num2) {
      console.log('Jinx!');
    }
  }

  return arr;
}

thisLengthThatValue(7, 4);
