//es6
let str = '';
const maxStrLength = 75;

const drawLeft = (num, char) => {
  if (typeof num === 'number' || typeof char === 'string') {
    for (let i = 0; i < maxStrLength; i++) {
      if (i < num) {
        str += `${char}`;
      } else {
        str += ' ';
      }
    }
  } else {
    console.log('One or more input values is incorrect, please check and try again.');
  }
  console.log(str);
};

const drawRight = (num, char) => {
  if (typeof num === 'number' || typeof char === 'string') {
    for (let i = 0; i < maxStrLength; i++) {
      if (i < (maxStrLength - num)) {
        str += ' ';
      } else {
        str += `${char}`;
      }
    }
  } else {
    console.log('One or more input values is incorrect, please check and try again.');
  }

  console.log(str);  
};

const drawCentered = (num, char) => {
  if (typeof num === 'number' || typeof char === 'string') {
    const halfRemainder = (maxStrLength - num) / 2;
    for (let i = 0; i < maxStrLength; i++) {
      if (i < halfRemainder || i > (halfRemainder + num)) {
        str += ' ';
      } else {
        str += `${char}`;
      } 
    } 
  } else {
    console.log('One or more input values is incorrect, please check and try again.');
  }
  console.log(str);
};

/*
  These functions are mutually exclusive. 
  Calling more than 1 at once will result in an incorrect final string.
  First value must be an integer.
  Second value must be a string.
*/

// drawLeft(10, 'A');
// drawRight(10,'B');
// drawCentered(10,'C');
