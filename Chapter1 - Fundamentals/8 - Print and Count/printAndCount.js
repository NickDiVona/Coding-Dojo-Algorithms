var count = 0;
for (var i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i);
        count ++;
    }
}
console.log(`Total of ${count} multiples of 5 in given range`);

/*
    Line 1:
        Declare the variable 'count'
        Assign 'count' a value of 0

    Line 2:
        Set up the for loop
        Set 'i' to the minimum value of the range
        Increment until the max number in the range is reached

    Line 3:
        Check to see if 'i' is a multiple of 5

    Line 4-5:
        Print current value of 'i'
        Increment 'count' by 1

    Line 8:
        Print the 'count' after all iterations are complete
*/
