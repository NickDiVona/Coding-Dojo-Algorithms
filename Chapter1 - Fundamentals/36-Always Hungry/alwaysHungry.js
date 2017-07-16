// create function and give it a parameter of array
function alwaysHungry(array) {
    // make sure input type is Array
    if (!Array.isArray(array)) {
        return false
    }
    // declare variable hasFood and assign it a value of false
    var hasFood = false;
    // loop through the input array
    for (var i = 0; i < array.length; i++) {
        // check if any of the array values are equal to "food"
        if (array[i] == "food") {
            // log "yummy"
            console.log("yummy");
            // set hasFood equal to true
            hasFood = true;
        }

    }
    // check if has food is still false. if so, do the following
    if (hasFood == false) {
        // log "I'm hungry."
        console.log("I'm hungry.");
    }
}
// call the function and give it an input of an array
alwaysHungry(["apple","cheese","fool","food","gasoline"])
