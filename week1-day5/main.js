const getPrefix = (strs) => {
  // array에서 모든 element들이 같은지 확인하는 함수
  // 이 함수의 return 값은 boolean으로 나옵니다.
  const allEqual = (arr) => arr.every((v) => v === arr[0]);

  lengthArr = [];
  for (let i = 0; i < strs.length; i++) {
    lengthArr.push(strs[i].length);
  }
  // 이 for loop을 통해 결과적으로 lengthArr = [6,6,5,5];

  let minLen = Math.min(...lengthArr);
  // minLen에 5가 결과적으로 할당됨

  let outerArr = [];
  for (let i = 0; i < strs.length; i++) {
    // 단어를 array로 변환해서 outerArr에 push
    outerArr.push(Array.from(strs[i]));
    // 예를 들어 이런식으로 만들엇 : ['p', 'e', 'r', 's', 'o', 'n']
    // outerArr에 push 한다.
  }
  // console.log(outerArr);

  let answerArr = [];
  for (let m = 0; m < minLen; m++) {
    // (let m = 0; m < 5; m++)
    let emptyArr = [];
    for (let i = 0; i < outerArr.length; i++) {
      // (let i = 0; i < 4; i ++ )
      emptyArr.push(outerArr[i][m]);
      // emptyArr.push(outerArr[0][m])
    }
    // console.log(emptyArr);
    // check if all elements in the array are same.

    if (allEqual(emptyArr)) {
      answerArr.push(emptyArr[0]);
    }
  }
  return answerArr;
};

strs = ["aasst", "aassteef", "aasstpeach", "aasstpeace"];
let answer = getPrefix(strs);
console.log(answer);
