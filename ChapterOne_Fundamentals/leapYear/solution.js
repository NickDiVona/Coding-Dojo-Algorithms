// write a function that determines whether a given year is a leap year.
// if a year is divisibly by 4, it is a leap year, unless it is divisible by 100.
// however if it is divisible by 400 then it is a leap year.

function leapYearCalc(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0) {
    if (year % 100 === 0) {
      return false;
    }

    return true;
  }

  return false;
}

//enter a year in place of the 800.
console.log(leapYearCalc(800));
