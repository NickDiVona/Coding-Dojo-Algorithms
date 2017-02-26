for (var i = -300; i <= 0; i+=3) {
    if (i === -6 || i === -3) {
        continue;
    }
    else {
        console.log(i);
    }
}

/*
    Line 1 sets up the initial for loop to iterate through all numbers from the minimum to the maximum by 3.

    Line 2-3 are a check to see if there is a specific value, don't log anything.

    Line 5-6 are the other part of the check. If the number isn't screened by the 'if' then this runs. In this case, it logs the value.
*/
