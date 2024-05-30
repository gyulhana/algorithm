const solution = (str) => {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      if (str[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer++;
      }
    }
  }

  return answer;
};

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
