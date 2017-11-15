// write a function to assign grades given an input score
// give + and - accuracy as well

function grade(num) {
  if (num > 89) {
    if (num > 97) {
      return 'A+';
    } else if (num < 93) {
      return 'A-';
    } else {
      return 'A';
    }
  } else if (num > 79) {
    if (num > 87) {
      return 'B+';
    } else if (num < 83) {
      return 'B-';
    } else {
      return 'B';
    }
  } else if (num > 69) {
    if (num > 77) {
      return 'C+';
    } else if (num < 73) {
      return 'C-';
    } else {
      return 'C';
    }
  } else if (num > 59) {
    if (num > 67) {
      return 'D+';
    } else if (num < 63) {
      return 'D-';
    } else {
      return 'D';
    }
  } else {
    return 'F';
  }
}

console.log(grade(91));
