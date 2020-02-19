function countdown(num) {
    var myArray = [];
    for (var i = num; i >= 0; i--) {
        myArray.push(i);
    }
    // console.log(myArray);
    console.log(myArray.length);
    return myArray;
}
countdown(5);

/*
    Line 1:
        Set up function that takes in a parameter 'num'

    Line 6-7:
        Print 'myArray' if needed
        Print the length of 'myArray'
        Return 'myArray'

    Line 9:
        Call the function
        Input the value '5'
*/
