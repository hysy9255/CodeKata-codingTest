# 문제

숫자로 이루어진 배열인 nums를 인자로 전달합니다.
숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

예를 들어,

```js
nums = [3, 2, 3];
return 3;

nums = [2, 2, 1, 1, 1, 2, 2];
return 2;
```

## 가정

`nums` 배열의 길이는 무조건 `2`개 이상

# Blue Print

1. 인자로 받은 배열의 요소들 중에서 unique한 값들만 뽑아낸다.
2. 각 unique한 값들이 배열의 요소로써 몇개씩 있는지 nested for loop 과 object를 통해 세어준다.
3. Object 안에 key 값들과 value 값들을 각각 배열로 만들어준다.
4. value 값들을 담은 배열에서 가장 큰값을 찾고 가장 큰값의 인덱스를 이용하여
5. key값이 들어있는 배열에 적용해서 답을 찾아낸다.
