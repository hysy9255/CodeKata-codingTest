const romanToNum = (s) => {
  let dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // 인자로 받은 문자열을 잘라서 변환
  // 그 배열을 strArr에 할당
  let strArr = Array.from(s);

  let numArr = [];
  // strArr을 숫자 배열로 변환
  for (let i = 0; i < strArr.length; i++) {
    numArr.push(dictionary[strArr[i]]);
  }

  let answer = 0;
  // for loop으로 숫자 배열을 돌음
  for (let i = 0; i < numArr.length; i++) {
    // 우리가 신경써야할 숫자는 1, 10, 100 밖에 없음
    // 이 셋중에 하나면 if 절로 들어감
    if (numArr[i] === 1 || numArr[i] === 10 || numArr[i] === 100) {
      // 현재 index의 그 다음 index가 undefined가 아니면 현재 인덱스의 숫자가
      // 어째든 끝수는 아니라는 뜻임
      if (numArr[i + 1] !== undefined) {
        // 끝수가 아니기 때문에 그 뒤에 숫자랑 비교해봄
        if (numArr[i] < numArr[i + 1]) {
          // 현재 인덱스의 숫자가 그 뒤 인덱스의 수보다 작으면 빼준다.
          answer = answer - numArr[i];
        } else {
          // 그렇지 않으면 보통의 룰을 적용하여 그냥 더해준다.
          answer = answer + numArr[i];
        }
      } else {
        // 여기 else는 끝수라는 조건이기 때문에 그냥 더해준다.
        answer = answer + numArr[i];
      }
    } else {
      // 위의 조건들에 모두 해당 안되면 그냥 다 더해줌
      answer = answer + numArr[i];
    }
  }

  return answer;
};
let s = "CD";
console.log(romanToNum(s));
