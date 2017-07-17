//add values from 100 to 4,000,000 that are also divisible by 3 or 5 but not both inclusively.

let sum = 0;

const threesFives = () => {
  for(let i = 100; i <= 4000000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
      } else {
        sum += i;
      }
    }
  }
  console.log(sum);
};

threesFives();
