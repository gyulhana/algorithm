const solution = (n, m) => {
  const answer = [];
  const tmp = Array.from({ length: m }, () => 0);

  const DFS = (num) => {
    if (num === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[num] = i;
        DFS(num + 1);
      }
    }
  };

  DFS(0);
  return answer;
};

console.log(solution(3, 2));
