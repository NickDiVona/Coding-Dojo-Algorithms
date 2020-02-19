// set up function
function whatReallyHappensToday() {
    // declare variable randNum and assign it a random int between 1 and 100
    var randNum = (Math.floor(Math.random() * (101 - 1) + 1));
    // check if randNum is between 1 and 10
    if (randNum >= 1 && randNum <= 10) {
        console.log("Volcano");
    }
    // check if randNum is between 1 and 15
    if (randNum >= 1 && randNum <= 15) {
        console.log("Tsunami");
    }
    // check if randNum is between 1 and 20
    if (randNum >= 1 && randNum <= 20) {
        console.log("Earthquake");
    }
    // check if randNum is between 1 and 25
    if (randNum >= 1 && randNum <= 25) {
        console.log("Blizzard");
    }
    // check if randNum is between 1 and 30
    if (randNum >= 1 && randNum <= 30) {
        console.log("Meteor strike");
    }
    // check if randNum is greater than 30
    if (randNum > 30) {
        console.log("Nothing happened");
    }
}
// call the function
whatReallyHappensToday()
