// ### 문제
// 재귀를 사용하여 팩토리얼(factorial)을 구하는 함수를 구현해주세요.
// 팩토리얼이란 1에서부터 n까지의 정수를 모두 곱한것을 말합니다.

// 1! = 1
// 2! = 1 * 2
// 5! = 1 * 2 * 3 * 4 * 5

const factorial = (input) => {
  let result = 1;
  let count = input;
  for (let i = 0; i < input; i++) {
    result *= count;
    count -= 1;
  }
  return result;
};

console.log(factorial(4));
