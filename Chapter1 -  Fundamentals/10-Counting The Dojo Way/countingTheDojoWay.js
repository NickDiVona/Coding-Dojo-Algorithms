// print integers 1 - 100. If it is divisible by 5, print "Coding" else print "Dojo".

const baseStr = 'Coding';

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    if (i % 10 === 0) {
      console.log(`${baseStr} Dojo`);
    } else {
      console.log(baseStr);
    }
  }
}
