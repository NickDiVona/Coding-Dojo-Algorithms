let wallet = {
  dollars: 0,
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
}

const generateCoinChange = (cents) => {
  while (cents > 0) {
    if (cents >= 100) {
      cents -= 100;
      wallet.dollars ++;
    } else if (cents >= 25) {
      cents -= 25;
      wallet.quarters ++;
    } else if (cents >= 10) {
      cents -= 10;
      wallet.dimes ++;
    } else if (cents >= 5) {
      cents -= 5;
      wallet.nickels ++;
    } else if (cents >= 1) {
      cents -= 1;
      wallet.pennies ++;
    }
  }
  console.log(wallet)
};

generateCoinChange(289)
