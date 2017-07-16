function isLeapYear(year) {
    if (year % 400 === 0) {
        console.log('Yes');
    }
    else if (year % 100 === 0) {
        console.log('No');
    }
    else if (year % 4 === 0) {
        console.log('Yes');
    }
}
isLeapYear(400)

/*
    Line 1:
        Set up initial function and give it a parameter of 'year'

    Line 2-3:
        Checks if input 'year' is divisible by 400
        If true, print "yes"

    Line 5-6:
        Checks if the input 'year' is divisible by 100
            Only occurs if input 'year' is not divisible by 400
        If true, print "no"

    Line 8-9:
        Checks if the input 'year' is divisible by 4
            Only occurs if input 'year' is not divisible by 400 or 100
        If true, print "yes"

    Line 12:
        Calls and runs function against input 'year'
*/
