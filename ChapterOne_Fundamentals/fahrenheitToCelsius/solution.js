// create a function that accepts a temp in F and converts it to C.
// tF = (9/5 * tC) + 32

function fahrenheitToCelsius(fDegrees) {
  let cDegrees = (fDegrees - 32) / 1.8;

  return cDegrees;
}

console.log(fahrenheitToCelsius(451));
