var message = 'Coding';
for (var i = 1; i <= 100; i++) {
    if (i % 10 === 0) {

    } else if (i % 5 === 0) {

    } else {

    }

    if (i % 5 === 0 && i % 10 !== 0) {
        console.log(message);
    }
    else if (i % 10 === 0) {
        console.log(`${message} Dojo`);
    }
    else {
        console.log(i);
    }
}

/*
    Line 1:
        Declare variable 'message'
        Assign 'message' a value of "Coding"

    Line 2:
        Set up for loop using our given range

    Line 3-4:
        Set up first check to see if value is divisible by 5 but not 10
        If true, print 'message'

    Line 6-7:
        Set up second check to see if value is divible by 10
        If true, print 'message' + "Dojo"
*/

i % 10 === 0

var something = "value";
var somethingElse;

if somethingElse
