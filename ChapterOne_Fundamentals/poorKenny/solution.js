// write a function for whatHappensToday()
// 10% chance of volcano
// 15% chance of tsunami
// 20% chance of earthquake
// 25% chance of blizzard
// 30% chance of meteor strike

function whatHappensToday(num) {
  if (num <= 10) {
    console.log('Volcano');
  } else if (num > 10 && num <= 25) {
    console.log('Tsunami');
  } else if (num > 25 && num <= 45) {
    console.log('Earthquake');
  } else if (num > 45 && num <= 70) {
    console.log('Blizzard');
  } else if (num > 70) {
    console.log('Meteor Strike');
  }
}

let catastrophe = Math.floor(Math.random() * (101 - 1) + 1);

whatHappensToday(catastrophe);
