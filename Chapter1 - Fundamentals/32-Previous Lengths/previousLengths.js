function previousLengths(array) {
    for (var i = array.length-1; i > 0; i--) {
            array[i] = (array[i - 1]).length;
    }
    console.log(array);
}
previousLengths(["there","is","no","cow","level"])
