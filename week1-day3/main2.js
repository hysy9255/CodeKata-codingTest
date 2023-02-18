// My version

const myFunction = (input) => {
  let arr = [];
  let maxLength = 0;
  for (let i = 0; i < input.length; i++) {
    if (arr.includes(input[i])) {
      arr = arr.slice(arr.indexOf(input[i]) + 1);
    }
    arr.push(input[i]);
    if (arr.length > maxLength) {
      maxLength = arr.length;
    }
    // console.log(arr);
  }
  return maxLength;
};

const input = "sttrg";
console.log(myFunction(input));
