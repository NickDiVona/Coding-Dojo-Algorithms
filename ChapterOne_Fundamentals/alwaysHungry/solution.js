// create a function that accepts an array
// print 'yummy' each time one of the values is equal to 'food'
// if no elements are equal to food, print "i'm hungry" once.

function alwaysHungry(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'food') {
      count++;
    }
  }

  if (count === 0) {
    console.log("I'm hungry!");
  }

  while (count > 0) {
    console.log('Yummy!');
    count--;
  }
}

alwaysHungry(['apple', 'food', 'transmission', 'cheese', 'food']);
