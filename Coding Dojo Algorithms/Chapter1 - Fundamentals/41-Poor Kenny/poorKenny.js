//set up the function
function whatHappensToday() {
    // create a variable disasterNum and assign it a random number from 1 to 100
    var disasterNum = Math.floor((Math.random() * (101 - 1)) + 1);
    // check if number is between 1-10
    if (disasterNum >= 1 && disasterNum <= 10) {
        console.log("Volcano");
    // check if number is between 11-30
    } else if (disasterNum > 10 && disasterNum <= 30) {
        console.log("Earthquake");
    // check if number is between 31-55
    } else if (disasterNum > 30 && disasterNum <= 55) {
        console.log("Blizzard");
    // check if number is between 56-85
    } else if (disasterNum > 55 && disasterNum <= 85) {
        console.log("Meteor strike");
    // check if number is outside of bounds (86-100)
    } else {
        console.log("Nothing happened");
    }
}
// call the function 
whatHappensToday()
