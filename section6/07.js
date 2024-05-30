// stack으로 풀었음
const solution = (required, h) => {
  const stack = [];

  for (let i = 0; i < h.length; i++) {
    if (required.includes(h[i])) {
      const last = stack.pop();
      const index = required.indexOf(h[i]);
      if (last !== required[index - 1]) return "NO";
      else stack.push(last, h[i]);
    }
  }
  return "YES";
};

console.log(solution("CBA", "CBDAGE"));
console.log(solution("CBA", "CGEADB"));

// 큐 풀이
const secondSolution = (required, h) => {
  const queue = required.split("");

  for (const x of h) {
    if (queue.includes(x)) {
      const first = queue.shift();
      if (x !== first) {
        return "NO";
      }
    }
  }
  return queue.length > 0 ? "NO" : "YES";
};

console.log(secondSolution("CBA", "CBDAGE"));
console.log(secondSolution("CBA", "CGEADB"));
