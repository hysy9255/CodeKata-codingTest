const getLengthOfStr = (str) => {
  let topLength = 0;
  let arr = [];

  for (i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) == -1) {
      arr.push(str[i]);
    } else {
      arr = arr.slice(arr.indexOf(str[i]) + 1);
      arr.push(str[i]);
    }

    if (topLength < arr.length) {
      topLength = arr.length;
    }
  }
  return topLength;
};

str = "abcddefghiii";

console.log(getLengthOfStr(str));
