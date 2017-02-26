var myNumber = 42;
var myName = 'Nick'
var temp;

temp = myNumber;
myNumber = myName;
myName = temp;
console.log(`My name is ${myName}, and my number is ${myNumber}`);

/*
Line 1-3 declaring variables. Notice we make a third variable temp and leave it blank. That will come into play in the next step.

Line 5 we assign the temp variable to the value to myNumber, now this is what things look like.
    temp = 42
    myNumber = 42
    myName = 'Nick'

Line 6 we change the value of myNumber to myName. Here is what our code looks like now.
    temp = 42
    myNumber = 'Nick'
    myName = 'Nick'

Line 7 we change the value of myName to temp's value. Why can't we just assign it to myNumber you might ask. This is becaue on Line 6 we permanently changed the value of myNumber to 'Nick'.

Line 8 logs myName and myNumber in a sentence for context.
*/
