// add odd integers from -300000 to 300000
// console.log the final sum.
// try to find a shortcut

let i = 1;
let sum = 0;

while (i < 300000) {
  sum += i;
  i += 2;
}

const total = sum * 2;
console.log(total);
