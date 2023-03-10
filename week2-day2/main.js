function moreThanHalf(nums) {
  // 인자로 받은 배열에서 unique한 값들만 추출
  let uniqueVals = [...new Set(nums)];

  let Obj = {};

  for (let i = 0; i < uniqueVals.length; i++) {
    let count = 0;
    for (let m = 0; m < nums.length; m++) {
      if (uniqueVals[i] === nums[m]) {
        count += 1;
      }
    }
    Obj[`${uniqueVals[i]}`] = count;
  }

  keysArr = Object.keys(Obj);
  // console.log("keysArr:", keysArr);
  valuesArr = Object.values(Obj);
  // console.log("valuesArr:", valuesArr);

  let maxVal = Math.max(...valuesArr);
  let index = valuesArr.indexOf(maxVal);
  let answer = Number(keysArr[index]);

  return answer;
}

let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(moreThanHalf(nums));
