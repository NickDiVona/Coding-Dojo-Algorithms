// write a function for whatReallyHappensToday()
// test each independently
// 10% chance of volcano
// 15% chance of tsunami
// 20% chance of earthquake
// 25% chance of blizzard
// 30% chance of meteor strike

function whatReallyHappensToday(num) {
  if (num <= 10) {
    console.log('Volcano');
  }

  if (num <= 15) {
    console.log('Tsunami');
  }

  if (num <= 20) {
    console.log('Earthquake');
  }

  if (num <= 25) {
    console.log('Blizzard');
  }

  if (num <= 30) {
    console.log('Meteor Strike');
  }
}

let catastrophe = Math.floor(Math.random() * (101 - 1) + 1);

whatReallyHappensToday(catastrophe);
