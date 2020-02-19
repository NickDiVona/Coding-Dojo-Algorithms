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
    if (score > 92) {
        console.log(`Score: ${score}. Grade: A`);
    } else if (score >= 90) {
        console.log(`Score: ${score}. Grade: A-`);
    } else if (score >= 88) {
        console.log(`Score: ${score}. Grade: B+`);
    } else if (score >= 83) {
        console.log(`Score: ${score}. Grade: B`);
    } else if (score >= 80) {
        console.log(`Score: ${score}. Grade: B-`);
    } else if (score >= 78) {
        console.log(`Score: ${score}. Grade: C+`);
    } else if (score >= 73) {
        console.log(`Score: ${score}. Grade: C`);
    } else if (score >= 70) {
        console.log(`Score: ${score}. Grade: C-`);
    } else if (score >= 68) {
        console.log(`Score: ${score}. Grade: D+`);
    } else if (score >= 63) {
        console.log(`Score: ${score}. Grade: D`);
    } else if (score >= 60) {
        console.log(`Score: ${score}. Grade: D-`);
    } else if (score >= 0) {
        console.log(`Score: ${score}. Grade: F`);
    }
}
// call the function and pass in a number (ideally between 0 and 100)
assignGrade(69)
