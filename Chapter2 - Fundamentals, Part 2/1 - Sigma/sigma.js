// for

function sigma(num) {
    var total = 0;
    for (var i = num; i > 0; i--) {
        total += i;
    }
    console.log(total);
    return total
}
sigma(5)


// while
function sigmaAgain(num) {
    var total = 0;
    while (num > 0) {
        total += num;
        num --;
    }
    console.log(total);
    return total
}
sigmaAgain(5)
