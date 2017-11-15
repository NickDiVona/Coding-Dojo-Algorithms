// base IQ is 101
// gain .01 first day, .02 first day, etc.
// what is the total IQ after the 98th day.

function intelligenceIncreaser(IQ) {
  for (let i = 1; i <= 98; i++) {
    console.log(i / 100);
    IQ += i / 100;
  }

  return IQ;
}

console.log(intelligenceIncreaser(101));
