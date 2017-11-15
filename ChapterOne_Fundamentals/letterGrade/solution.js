// write a function to assign grades given an input score

function grade(num) {
  if (num > 89) {
    return 'A';
  } else if (num > 79) {
    return 'B';
  } else if (num > 69) {
    return 'C';
  } else if (num > 59) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(grade(90));
