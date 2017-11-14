// given two numbers, m and b in the equation "y = mx + b"
// build a function that returns the x-intercept

function xIntercept(m, b) {
  let xInt = (0 - b) / m;

  return xInt;
}

console.log(xIntercept(4, 2));

// thought process:
//  y = mx + b
//  y - b = mx
//  (y - b) / m = x
//  set y = 0
