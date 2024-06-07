const solution = (n, cnt) => {
  const answer = [];
  let tmp = Array.from({ length: cnt }, () => 0);

  const DFS = (l, s) => {
    if (l === cnt) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[l] = i;
        DFS(l + 1, i + 1);
      }
    }
  };

  DFS(0, 1);
  return answer;
};

console.log(solution(4, 2));
