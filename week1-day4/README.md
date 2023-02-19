# 문제

숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.

num: 숫자
return: true or false (뒤집은 모양이 num와 똑같은지 여부)

예를 들어,
num = 123
return false
=> 뒤집은 모양이 321 이기 때문

num = 1221
return true
=> 뒤집은 모양이 1221 이기 때문

num = -121
return false
=> 뒤집은 모양이 121- 이기 때문

num = 10
return false
=> 뒤집은 모양이 01 이기 때문

# Blue Print

1. 인자로 받은 숫자를 string으로 변환하고 해당 string의 요소들을 배열안에 넣어준다.
2. 해당 배열을 복사하여 순서를 뒤집는다.
3. 원본 배열과 순서를 뒤집은 배열의 요소들을 다시 string으로 만들어준 후 같은지를 비교한다.
