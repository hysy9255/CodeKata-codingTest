const reverse = (x) => {
  let stringX = String(x);
  let arr = [];
  if (x >= 0) {
    for (let i = stringX.length - 1; i >= 0; i--) {
      arr.push(stringX[i]);
    }
  } else {
    let rmNegStringX = stringX.slice(1, stringX.length);
    for (let i = rmNegStringX.length - 1; i >= 0; i--) {
      arr.push(rmNegStringX[i]);
    }
  }
  let string = "";
  for (let m = 0; m <= arr.length - 1; m++) {
    string += arr[m];
  }
  if (x < 0) {
    let result = Number("-" + string);
    return result;
  } else {
    let result = Number(string);
    return result;
  }
};

console.log(reverse(-321));
