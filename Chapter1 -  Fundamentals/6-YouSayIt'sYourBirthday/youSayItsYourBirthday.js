// if two given numbers represent your birth month and day in either order, log "how did you know", otherwise log "just another day"

function youSayItsYourBirthday(num1, num2) {
  //editable based on your day
  const month = 8;
  const date = 30;

  // if the date and month are the same check the inputs, proceed
  if (month === date) {
    // if the inputs are also the same, all good. Otherwise, it's a no.
    if (num1 === num2) {
      console.log('how did you know?');
    } else {
      console.log('just another day...');
    }
    // if the month and date aren't the same, proceed
  } else {
    if (num1 === month || num2 === month) {
      if (num1 === date || num2 === date) {
        console.log('how did you know?');
      } else {
        console.log('just another day...');
      }
    } else {
      console.log('just another day...');
    }
  }
}

youSayItsYourBirthday(7, 22); // expect false
youSayItsYourBirthday(8, 30); //expect true
youSayItsYourBirthday(30, 8); //expect true
youSayItsYourBirthday(30, 2); //expect false
youSayItsYourBirthday(8, 8); //expect false
