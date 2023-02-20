## 문제

strs은 단어가 담긴 배열입니다.
공통된 시작 단어(prefix)를 반환해주세요.

예를 들어
strs = ['start', 'stair', 'step']
return은 'st'

strs = ['start', 'wework', 'today']
return은 ''

## Blue Print

예를 들어 인자로 받을 배열에 다음과 같은 단어들이 들어 있다고 가정해 봅시다: [“person”, “peach”, “pencil”, “pension”] — 이 단어들을 아래의 그림과 같이 구현합니다.

![](https://github.com/hysy9255/CodeKata-codingTest/blob/main/week1-day5/imgs/img_1.webp)

<p align="center">
    <img src = "https://github.com/hysy9255/CodeKata-codingTest/blob/main/week1-day5/imgs/img_1.webp">
<p>

해당 단어들을 위와 같이 구현하는 이유는 인자로 들어오는 배열 (strs) 에 몇 개의 단어가 들어오든 상관없이 아래와 같이 비교를 할 수 있기 때문입니다.

![](https://github.com/hysy9255/CodeKata-codingTest/blob/main/week1-day5/imgs/img_2.webp)

여기서 한 가지 주의 할 점은 인자로 받은 단어들 중 가장 짧은 단어 “pen”의 길이는 3이고 나머지 단어들의 길이는 3을 초과한다는 것입니다. 따라서 추후에 for loop을 돌면서 해당 단어들을 비교 시 for loop의 횟수가 3을 넘어가면 안됩니다. 왜냐하면 4번을 돌 경우 다른 단어들은 ‘s’, ‘c’, ‘c’ 를 비교 할테지만 pen은 비교할 알파벳이 없기 때문에 에러가 날 수 있습니다.

이러한 로직을 구상하였다면 이제는 코드로써 해당 로직을 구현할 차례입니다.

코드로 로직 구현
위의 getPrefix 라는 함수는 크게 5개의 파트로 나뉩니다. 하나 씩 살펴보도록 하겠습니다.

### Part 1.

```
// Part 1.
let outerArr = [];
for (let i = 0; i < strs.length; i++) {
  outerArr.push(Array.from(strs[i]));
}
console.log(outerArr);
```

첫 번째 파트에서는 인자로 받은 배열의 단어들을 위의 그림처럼 구현하는 코드 입니다. console.log(outerArr);을 실행하면 확인해 볼 수 있습니다.

### Part 2.

```
// Part 2.
let lengthArr = [];
for (let i = 0; i < outerArr.length; i++) {
  lengthArr.push(outerArr[i].length);
}
let minLen = Math.min(...lengthArr);
```

두 번째 파트에서는 빈 배열을 만들고 for loop을 돌며 strs 안에 있는 element의 길이를 계산하여 빈 배열에 하나씩 넣어줍니다. 그리고 해당 배열의 가장 작은 수를 골라 내어 minLen 이라는 변수에 할당합니다.

여기서 가장 작은 수를 골라내는 작업은 위에서 언급한 것과 같이 가장 작은 단어의 길이 만큼만 for loop을 돌기 위함입니다.

### Part 3.

```
const allEqual = (arr) => arr.every((v) => v === arr[0]);
```

세 번째 파트에서는 allEqual이라는 함수를 선언 하였습니다. 이 함수는 파트 4에 사용될 함수로써 어떠한 array의 element값들이 모두 같은 지를 판별하고 boolean 값을 도출합니다.

### Part 4.

```
// Part 4.
let answerArr = [];
for (let m = 0; m < minLen; m++) {
  let tempArr = [];
  for (let i = 0; i < outerArr.length; i++) {
    tempArr.push(outerArr[i][m]);
  }
  console.log(tempArr);

  if (allEqual(tempArr)) {
    answerArr.push(tempArr[0]);
  }
}
console.log(answerArr);
```

해당 알고리즘 문제에서 가장 난이도가 높은 파트입니다. 2 차원 데이터로 이루어진 outerArr를 다루기 위해서 nested for loop (for loop 안에 for loop이 존재하는 형태) 을 사용합니다.

![](https://github.com/hysy9255/CodeKata-codingTest/blob/main/week1-day5/imgs/img_3.webp)

outerArr안에 배열들이 요소로써 존재합니다. Nested for loop을 통해 각 배열들의 첫 번째 요소들을 깎아내어 임시 저장소 (tempArr)에 넣은 후, 파트 3에서 만든 allEqual() 함수를 통해 모두 동일한 값들인지 확인하고 그러하다면 answerArr 배열에 push 합니다.

이 프로세스를 각 배열들의 두 번째와 세 번째 요소들에게도 동일하게 적용합니다.

![](https://github.com/hysy9255/CodeKata-codingTest/blob/main/week1-day5/imgs/img_4.webp)

### Part 5.

```
// Part 5.
answerStr = "";
for (let i = 0; i < answerArr.length; i++) {
  answerStr += answerArr[i];
}
```

이제 답으로 나온 배열 answerArr을 문제에서 원하는 형태인 string 형태로 변환하여 도출합니다.
