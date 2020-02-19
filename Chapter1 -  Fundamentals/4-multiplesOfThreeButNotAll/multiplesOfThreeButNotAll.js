// using FOR, print multiples of 3 from -300 to 0.
// skip -3 and -6

for (let i = -300; i <= 0; i += 3) {
  if (!(i === -3 || i === -6)) {
    console.log(i);
  }
}
