const solution = (str) => {
  const stack = [];

  for (const x of str) {
    if (x !== ")") stack.push(x);
    else {
      while (stack.pop() !== "(");
    }
  }
};

// 괄호가 안 열리고 시작할 때는 없는 문제인가?
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
