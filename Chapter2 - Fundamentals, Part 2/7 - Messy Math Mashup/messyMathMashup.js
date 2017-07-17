/*
  CURRENTLY BROKEN
  Line 20-21 is not working correctly
  Should return -1, returns sum value of 96 instead with input of 15

*/

const messyMath = (num) => {
  let sum = 0;

  for (let count = 0; count <= num; count++) {
    if (count % 3 === 0) {
      sum += 0;
    } else if (count % 7 === 0) {
      sum += (count * 2);
    } else {
      sum += count;
    } 

    if (count / 3 === num) {
      return -1;
    }
  }
  return sum;
};

console.log(messyMath(15));

