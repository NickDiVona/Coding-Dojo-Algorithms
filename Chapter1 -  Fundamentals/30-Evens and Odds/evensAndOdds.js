function evensAndOdds(array) {
    if (!Array.isArray(array)) {
        return false;
    }

    var evenCount = 0;
    var oddCount = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenCount += 1;
            oddCount = 0;
        } else {
            evenCount = 0;
            oddCount += 1;
        }

        if (evenCount === 3) {
            console.log("Even more so!");
            evenCount = 0;
        }

        if (oddCount === 3) {
            console.log("That's odd!");
            oddCount = 0;
        }
    }
}
evensAndOdds([1,567,-123,-23,1,70,3,1,7,-8])
