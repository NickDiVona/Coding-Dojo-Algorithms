//es6
let str = '';
const maxStrLength = 75;

const drawLeftStars = (num) => {
  for (let i = 0; i < maxStrLength; i++) {
    if (i < num) {
      str += '*';
    } else {
      str += ' ';
    }
  }

  console.log(str);
};

const drawRightStars = (num) => {
  for (let i = 0; i < maxStrLength; i++) {
    if (i < (maxStrLength - num)) {
      str += ' ';
    } else {
      str += '*';
    }
  }

  console.log(str);  
};

const drawCenteredStars = (num) => {
  const halfRemainder = (maxStrLength - num) / 2;

  for (let i = 0; i < maxStrLength; i++) {
    if (i < halfRemainder || i > (halfRemainder + num)) {
      str += ' ';
    } else {
      str += '*';
    } 
  }

  console.log(str);
};


/*
  These functions are mutually exclusive. 
  Calling more than 1 at once will result in an incorrect final string.
*/

// drawLeftStars(10);
// drawRightStars(10);
// drawCenteredStars(10);
