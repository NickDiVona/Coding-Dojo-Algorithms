function theFinalCountdown(param1,param2,param3,param4) {
    var i = param2;
    while (i <= param3) {
        if (i % param1 === 0 && i % param4 !== 0) {
            console.log(i);
        }
        i++
    }
}
theFinalCountdown(3,5,17,9)

/*
    Line 1:
        Set up function
        Give parameters 'param1', 'param2', 'param3', 'param4'

    Line 2:
        Declare variable 'i'
        Set value of 'i' to param2

    Line 3:
        Set up while loop
        Run if 'i' is less than or equal to 'param3'

    Line 4:
        Checks if 'i' is divisible by 'param1' and not divisible by 'param4'
        If true, print 'i'

    Line 7:
        Increment 'i' by 1 per iteration

    Line 10:
        Call function
        Give input parameters values
*/
