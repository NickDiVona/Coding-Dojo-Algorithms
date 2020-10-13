// Given an array, a min value, and a max value remove values in an array between the min and max. 
// Work in place, do not use built in functions.

// CHEATING - USING BUILT IN METHODS AND MAKING A NEW ARRAY

const sampleArr = [3,8,2,6,1,96,3,5]

function filterRange(arr, min, max) {
  let filtered = []
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] < min || arr[i] > max) {
      filtered.push(arr[i])

    }
  }

  return filtered
}

console.log(filterRange(sampleArr, 3, 8))