var arr = [1,3,5,7,9,13];
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
        count++;
    }
}
// console.log(count);
return (count);

/*
    Line 1:
        Declare variable 'arr'
        Give 'arr' a value of [1,3,5,7,9,13]

    Line 2:
        Declare variable 'count'
        Give 'count' a value of 0

    Line 3:
        Set up for loop
        Set 'i' to 0
        Run as long as 'i' is less than the length of 'arr'
        Increment 'i' by 1 per iteration

    Line 4-5:
        Checks if current 'arr' value is greater than second 'arr' value
        If true increment 'count' by 1

    Line 8-9:
        Print value of 'count' if needed
        Return value of 'count'
*/
