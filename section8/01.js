const solution = (n) => {
  const stack = [];

  const DFS = (l) => {
    if (l === 0) return;
    else {
      DFS(l - 1);
      console.log(stack.push(l));
    }
  };

  DFS(n);

  return stack;
};

console.log(solution(3));
