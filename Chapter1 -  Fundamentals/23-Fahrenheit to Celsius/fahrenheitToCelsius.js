// set up variable cDegrees
var cDegrees;
// set up function with an input of fDegrees
function fahrenheitToCelcius(fDegrees) {
    // change value of cDegrees to the converted fDegrees value
    cDegrees = ((fDegrees - 32) * (5/9))
    // print the cDegrees value (optional)
    console.log(`${cDegrees} degrees celcius.`);
    // return cDegrees value
    return cDegrees
}
// call the function and give it an input number (fDegrees).
fahrenheitToCelcius(34)
