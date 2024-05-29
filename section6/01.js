const solution = (str) => {
  const stack = [];
  for (const x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  return stack.length > 0 ? "NO" : "YES";
};

console.log(solution("(()(()))(()"));
console.log(solution("(()(()))()"));
