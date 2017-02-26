var count = 0;
for (var i = 515; i <= 4095; i+=5) {
        console.log(i);
        count ++;
}
console.log(`Total of ${count} multiples of 5 in given range`);

/*
    Doing things this way, no if check is needed.

    Line 1:
        Declare the variable 'count'
        Set 'count' to 0

    Line 2:
        Round the minimum value to nearest multiple of 5 within range
        Set 'i' to the rounded value
        Round the maximum value to nearest multiple of 5 within range
        Increment by 5 until the rounded value is reached

    Line 3-4:
        Print each value
        Increment count by 1 per each iteration

    Line 6:
    Print total count of iterations.
*/
