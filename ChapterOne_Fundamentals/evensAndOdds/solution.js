function evensAndOdds(arr) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
      oddCount = 0;
    } else {
      oddCount++;
      evenCount = 0;
    }

    if (evenCount === 3) {
      console.log(`Even more so!`);
    }

    if (oddCount === 3) {
      console.log(`That's odd!`);
    }
  }
}

evensAndOdds([1, 5, 2, 67, 2, 56, 4, 2, 2, 5, 3]);
