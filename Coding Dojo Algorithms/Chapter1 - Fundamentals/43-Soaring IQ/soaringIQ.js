function soaringIQ() {
    var currentIQ = 101;

    for (var i = .01; i <= .98; i += .01) {
        currentIQ += i;
    }
    console.log(`IQ at end of bootcamp is ${currentIQ}.`);
}
soaringIQ()
