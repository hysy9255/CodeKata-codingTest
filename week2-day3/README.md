# 문제

s는 여러 괄호들로 이루어진 String 인자입니다.
s가 유효한 표현인지 아닌지 true/false로 반환해주세요.

종류는 '(', ')', '[', ']', '{', '}' 으로 총 6개 있습니다.
아래의 경우 유효합니다.
한 번 괄호를 시작했으면, 같은 괄호로 끝내야 한다.
괄호 순서가 맞아야 한다.

예를 들어 아래와 같습니다.

```python
s = "()"
return true

s = "()[]{}"
return true

s = "(]"
return false

s = "([)]"
return false

s = "{[]}"
return true
```

s = "[]{}"

# Blue Print

1. Create a function that flips a bracket
2. Split input string of brackets into an array.
3. Loop through them and use flip function to see if back and forth elements match. This is considered test 1.
4. If test 1 fails, we have to consider the case where brackets are inside of brackets. i.e. "{[]}". So we proceed to test 2.
5. Test 2 first checks if there are even number of brackets.
6. If that passes, then ... (second test is too complicated to decode)
