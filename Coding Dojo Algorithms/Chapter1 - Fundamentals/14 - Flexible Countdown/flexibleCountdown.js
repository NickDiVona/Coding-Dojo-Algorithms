function flexibleCountdown(lowNum, highNum, mult) {
    for (var i = highNum; i > lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}
flexibleCountdown(2,9,3)

/*
    Line 1:
        Set up function
        Give parameters 'lowNum', 'highNum', 'mult'

    Line 2:
        Set up for loop
        Set value of 'i' to highNum
        Run if 'i' is greater than 'lowNum'
        Decrement 'i' by 1 per iteration

    Line 3-4:
        Checks if 'i' is divisible by 'mult'
        If true, print 'i'

    Line 8:
        Call function
        Give input parameters a value
*/
