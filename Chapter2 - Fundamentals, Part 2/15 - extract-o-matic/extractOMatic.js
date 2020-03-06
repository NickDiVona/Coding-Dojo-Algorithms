function extractDigit(num, digitNum) {
  if (num > 0) {
    return Math.floor(num / 10 ** digitNum) % 10;
  }

  return Math.floor(Math.abs(num / 10 ** digitNum) % 10);
}

console.log(extractDigit(1824, 2)); //expect 8
console.log(extractDigit(1824, 0)); //expect 4
console.log(extractDigit(1824, 7)); //expect 0
console.log(extractDigit(123.45, -1)); //expect 4
console.log(extractDigit(-123.45, -1)); //expect 4
