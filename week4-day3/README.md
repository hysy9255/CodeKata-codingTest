# 문제

다음과 같이 input이 주어졌을 때,같은 알파벳으로 이루어진 단어끼리 묶어주세요.

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

output에서 순서는 상관없습니다.

### Blue Print

1. 각 알파벳에는 특정 숫자가 할당 되어있습니다.
2. 따라서 어떠한 단어에 대하여 각 알파벳에 할당된 수를 모두 더하는 함수를 하나 만듭니다.
   - calculateNum()
3. 따라서 calculateNum()에 "eat" 과 "tea"를 넣어주면 같은 값을 반환할 것입니다.
4. 또한 getUniqueValues() 라는 함수를 만듭니다.

   - 이 함수는 숫자로 이루어진 배열을 인자로 넣어서 호출하면 해당 배열의 unique한 값들만 배열안에 담아서 반환합니다.

5. 예를 들어 input = ["eat", "tea", "tan", "ate", "nat", "bat"] 가 주어졌다면
   for loop 과 calculateNum() 을 이용하여 numArr = [ 314, 314, 323, 314, 323, 311 ] 을 만들어 줍니다.

6. 그리고 getUniqueValues()을 통해 numArr의 unique 한 값들만 unique = [314, 323, 311] 을 만들어 줍니다.

7. 또한 finalArr 이라는 빈 배열안에 unique의 길이만큼 빈 배열을 push 해줍니다.
   finalArr = [[], [], []]

8. 그리고 마지막 nested for loop과 로직을 통해 원하는 값을 얻을 수 있습니다.
   ```
   for (let i = 0; i < unique.length; i++) {
   for (let m = 0; m < input.length; m++) {
   if (unique[i] === numArr[m]) {
   finalArr[i].push(input[m]);
   }
   }
   }
   ```

```

```
