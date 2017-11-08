// based on earlier "countdown bu fours" given lowNum, highNum, mult
// print multiples of mult from highNum to lowNum using FOR.
// ex: for (2,9,3) print (9,6,3)

function useMult(lowNum, highNum, mult) {
  let i = highNum;

  while (i > lowNum) {
    if (i % mult === 0) {
      console.log(i);
      i -= mult;
    } else {
      i--;
    }
  }
}

// lowNum, highNum, mult
useMult(2, 9, 3);
