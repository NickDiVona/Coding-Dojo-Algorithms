function pushFront(arr, num) {
  arr.length++;
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const sampleArr = [1, 10, 20, 2, 7];
const sampleNum = 5;

pushFront(sampleArr, sampleNum);
