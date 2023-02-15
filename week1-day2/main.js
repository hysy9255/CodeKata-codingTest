// reverse 함수에 정수인 숫자를 인자로 받습니다.
// 그 숫자를 뒤집어서 return해주세요.

// x: 숫자
// return: 뒤집어진 숫자를 반환!

// 예들 들어,
// x: 1234
// return: 4321

// x: -1234
// return: -4321

// x: 1230
// return: 321

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
