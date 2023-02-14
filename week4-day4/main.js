const myFunc = (input) => {
  let count = 0;
  let outerArr = [];
  while (count < input.length) {
    let innerArr = [];
    let num = 0;
    for (let i = count; i < input.length; i++) {
      num += input[i];
      innerArr.push(num);
    }
    let innerLargest = innerArr[0];
    for (let i = 0; i < innerArr.length; i++) {
      if (innerLargest < innerArr[i]) {
        innerLargest = innerArr[i];
      }
    }
    outerArr.push(innerLargest);

    count += 1;
  }

  let outerLargest = outerArr[0];
  for (let i = 0; i < outerArr.length; i++) {
    if (outerLargest < outerArr[i]) {
      outerLargest = outerArr[i];
    }
  }
  return outerLargest;
};

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(myFunc(input));
