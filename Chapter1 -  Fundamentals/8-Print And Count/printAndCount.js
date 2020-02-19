// print all integer multiples of 5 from 512 to 4096.
// afterwards, log how many there were.

let i = 512;
let count = 0;

while (i < 4096) {
  if (i % 5 === 0) {
    console.log(i);
    count++;
  }

  i++;
}

console.log(`Count: ${count}`);
