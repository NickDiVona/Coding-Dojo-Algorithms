// set up function and have it take in an m and b.
function mathHelp(m,b) {
    // make sure both m & b are numbers
    if (!Number.isInteger(m) || !Number.isInteger(b) {
        return false;
    }
    // create variable xInt and assign it the value
    /*
                    y = mx + b
        set y = 0
                    0 = mx + b
        move b over
                    -b = mx
        divide by m
                    -b/m = x
    */
    var xInt = (-1 * b) / m;
    // log the xInt value
    console.log(xInt);
    // return the xInt value
    return xInt;
}
// call the function and pass in 2 numeric values
mathHelp(6, 2)
