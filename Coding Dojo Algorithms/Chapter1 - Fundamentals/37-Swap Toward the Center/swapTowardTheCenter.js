function swapTowardTheCenter(array) {
    if (!Array.isArray(array)) {
        return false;
    }

    var temp;
    var count = 1;

    for (var i = 0; i < array.length/2; i+=2) {
        temp = array[i];
        array[i] = array[array.length-count];
        array[array.length-count] = temp;
        count+=2;
    }
    console.log(array);
}
swapTowardTheCenter([1,2,3,4,5,6,7,8,9,10])
