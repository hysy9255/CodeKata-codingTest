let isValid = (s) => {
  let type_list = ["(", ")", "[", "]", "{", "}"];
  let flip = (bracket) => {
    if (type_list.includes(bracket)) {
      let index = type_list.indexOf(bracket);
      if (index === 0 || index === 2 || index === 4) {
        return type_list[index + 1];
      } else {
        return type_list[index - 1];
      }
    }
  };
  let sArr = s.split("");

  // first test
  booleanArr = [];
  for (let i = 0; i < sArr.length; i++) {
    let elem = sArr[i];
    if (i === 0 || i === 2 || i === 4) {
      booleanArr.push(flip(elem) === sArr[i + 1]);
    } else {
      booleanArr.push(flip(elem) === sArr[i - 1]);
    }
  }

  if (booleanArr.includes(false)) {
    // go to the second test!
    // second test
    booleanArr2 = [];
    if (s.length % 2 === 0) {
      let half = s.length / 2;
      for (let i = half; i > 0; i--) {
        booleanArr2.push(flip(sArr[i - 1]) === sArr[i]);
        sArr.splice(i - 1, 2);
      }
      if (booleanArr2.includes(false)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return true;
  }
};

let s = "[]{}";
console.log(isValid(s));
