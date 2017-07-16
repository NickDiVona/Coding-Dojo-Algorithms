var newArray = [];
function addSevenToMost(array) {
    for (var i = 1; i < array.length; i++) {
        newArray.push(array[i] + 7);
    }
    console.log(newArray);
}
addSevenToMost([1,4,11,-4,2,-17,100,8])
