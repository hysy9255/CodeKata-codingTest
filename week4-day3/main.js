// # 문제
// 다음과 같이 input이 주어졌을 때,같은 알파벳으로 이루어진 단어끼리 묶어주세요.
// ```
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// ```
// output에서 순서는 상관없습니다.

const myFunction = (input) => {
  const calculateNum = (inputString) => {
    let num = 0;
    for (let i = 0; i < inputString.length; i++) {
      num += inputString.charCodeAt(i);
    }
    return num;
  };

  const getUniqueValues = (inputArr) => {
    return [...new Set(inputArr)];
  };

  const numArr = [];
  for (let i = 0; i < input.length; i++) {
    let num = calculateNum(input[i]);
    numArr.push(num);
  }
  let unique = getUniqueValues(numArr);

  let finalArr = [];
  for (let i = 0; i < unique.length; i++) {
    finalArr.push([]);
  }

  for (let i = 0; i < unique.length; i++) {
    for (let m = 0; m < input.length; m++) {
      if (unique[i] === numArr[m]) {
        finalArr[i].push(input[m]);
      }
    }
  }
  return finalArr;
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
let answer = myFunction(input);
console.log(answer);
