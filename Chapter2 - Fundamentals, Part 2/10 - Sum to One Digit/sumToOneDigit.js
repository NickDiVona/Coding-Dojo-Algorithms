const sumToOne = (num) => {
  let convNum = String(num);
  let temp = 0;

  if (temp === 0) {
    for (let i = 0; i < convNum.length; i++) {
      temp += Number(convNum[i]);     
    }
  }

  if (temp > 9 || convNum > 9) {
    convNum = 0;
    temp = String(temp);
    for (let i = 0; i < temp.length; i++) {
      convNum += Number(temp[i]);
    }
  }

  console.log(convNum);
};

sumToOne(55);
