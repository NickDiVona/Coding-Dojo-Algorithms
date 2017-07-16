// set up the function and have it take in a parameter, score
function assignGrade(score) {
    // check to see if score is of type integer
    if (!Number.isInteger(score)) {
        return false;
    }
    // check to make sure score is between 0 and 100
    if (score > 100 || score < 0) {
        console.log(`Score is out of range.`);
        return false;
    }
    // assign grades based on input score
    if (score >= 90) {
        console.log(`Score: ${score}. Grade: A`);
    } else if (score >= 80 && score < 90) {
        console.log(`Score: ${score}. Grade: B`);
    } else if (score >= 70 && score < 80) {
        console.log(`Score: ${score}. Grade: C`);
    } else if (score >= 60 && score < 70) {
        console.log(`Score: ${score}. Grade: D`);
    } else if (score >= 0 && score < 60) {
        console.log(`Score: ${score}. Grade: F`);
    }
}
// call the function and pass in a number (ideally between 0 and 100)
assignGrade(89)
