// print multiples of 6 up to 60000 using while.

let i = 0;

while (i <= 60000) {
  console.log(i);
  if (i < 60000) {
    i += 6;
  } else {
    break;
  }
}
