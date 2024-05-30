const solution = (string) => {
  const stack = [];
  let answer = "";

  for (const x of string) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      const last = stack.pop();
      const before = stack.pop();

      if (x === "*") {
        stack.push(before * last);
      } else if (x === "/") {
        stack.push(before / last);
      } else if (x === "+") {
        stack.push(before + last);
      } else {
        stack.push(before - last);
      }
    }
  }
  return stack[0];
};

// 값만 찾으면 되기 때문에 표현식을 구할 필요는 없음..!!

console.log(solution("352+*9-"));
