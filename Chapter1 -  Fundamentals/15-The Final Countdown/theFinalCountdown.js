// based on flexible countdown
// given (param1, param2, param3, param4)
// print multiples of param1, starting at param2, extending to param3
// unless if it is equal to param4, in which case, skip.
// use a WHILE loop.
// given (3,5,17,9) print 6,12,15

function finalCountdown(target, lowNum, highNum, exception) {
  let i = lowNum;

  while (i < highNum) {
    if (i % target === 0) {
      if (i % exception !== 0) {
        console.log(i);
      }
    }
    i++;
  }
}

finalCountdown(3, 5, 17, 9);

// this can be made more efficient by using less iterations. Too tired to solve now.
