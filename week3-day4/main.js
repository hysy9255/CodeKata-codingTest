// 주어진 숫자 배열에서, 0을 배열의 마지막쪽으로 이동시켜주세요.
// 원래 있던 숫자의 순서는 바꾸지 말아주세요.

// (새로운 배열을 생성해서는 안 됩니다.)

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// blue print:
// 배열에 0이 몇개 있는지 for loop을 통해 세어본다.
// filter 메서드를 이용하여 배열에 0이 아닌 값들만 추출한다.
// 그리고 0의 갯수 만큼 배열 끝에 0을 넣어준다.

const myFunc = (input) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
      count += 1;
    }
  }

  let filtered = input.filter((elem) => elem !== 0);

  for (let i = 0; i < count; i++) {
    filtered.push(0);
  }
  return filtered;
};

const input = [0, 1, 0, 3, 12];
const result = myFunc(input);

console.log(result);
