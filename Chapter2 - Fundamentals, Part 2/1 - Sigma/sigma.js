// for

function sigma(num) {
  let total = 0;
  for (let i = num; i > 0; i--) {
    total += i;
  }
  return total;
}
console.log(sigma(5));

// while
function sigmaAgain(num) {
  let total = 0;
  while (num > 0) {
    total += num;
    num--;
  }
  return total;
}
console.log(sigmaAgain(5));
