const myFunction = (input, target) => {
  let innerLoopStart = 1;
  const stop = input.length;
  let answer = [];
  for (let i = 0; i < stop; i++) {
    for (let m = innerLoopStart; m < stop; m++) {
      if (input[i] + input[m] === target) {
        answer.push(i, m);
      }
    }
    innerLoopStart += 1;
  }
  return answer;
};

const input = [4, 9, 11, 14];
const target = 13;

console.log(myFunction(input, target));
