// declare fDegrees variable
var fDegrees;
// set up function to convert C to F, and give it an input of cDegrees
function celsiusToFahrenheit(cDegrees) {
    // change value of fDegrees to cDegrees converted
    fDegrees = ((9/5) * cDegrees) + 32;
    // log the converted degrees in F (optional)
    console.log(`${fDegrees} degrees Fahrenheit`);
    // rerturn fDegrees
    return fDegrees;
}
// call the function and give it an Int value
celsiusToFahrenheit(15)
