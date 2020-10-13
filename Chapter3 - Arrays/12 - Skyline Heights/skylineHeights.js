// given an array of building heights ordered from closest to you, to farthest to you, sort which ones you can see
//do not use built in methods

const firstArr = [-1, 2, -1, 1, 7]
const secondArr = [7, 1, 2, -1, 0, 9]

function skylineHeights(arr) {
  let highest = 0;
  let visible = []

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] >= highest) {
      visible.length += 1
      visible[visible.length - 1] = arr[i]
      highest = arr[i]
    }
  }

  return visible
}

console.log(skylineHeights(firstArr))
console.log(skylineHeights(secondArr))
