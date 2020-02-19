// buying sweatshirts, $20 including tax. 9% discount for 2, 19% for 3, 35% for 4 or more. Accepts cash but doesn't have coin change so return an even dollar amount for cost.

function sweatshirtPricing(num) {
  let cost = num * 20;
  let total;

  if (num < 1) {
    return 0;
  } else if (num === 1) {
    return cost;
  } else if (num === 2) {
    total = cost * 0.91;
  } else if (num === 3) {
    total = cost * 0.81;
  } else {
    total = cost * 0.65;
  }

  return Math.ceil(total);
}

console.log(sweatshirtPricing(1)); // expect 20
console.log(sweatshirtPricing(2)); // expect 37 (36.4)
console.log(sweatshirtPricing(3)); // expect 49 (48.6)
console.log(sweatshirtPricing(4)); // expect 52 (52.0)
