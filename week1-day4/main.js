const myFunction = (num) => {
  let arr = Array.from(String(num));
  let reverseArr = Array.from(String(num));
  reverseArr.reverse();

  let str = "";
  let reverseStr = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    reverseStr += reverseArr[i];
  }
  // console.log(str, reverseStr)
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
};

const input = -1222;
console.log(myFunction(input));
