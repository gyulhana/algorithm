const solution = (n, big) => {
  let answer;
  const dy = Array.from(Array(11), () => Array(11).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);
  const p = Array.from({ length: n }, () => 0);
  const b = Array.from({ length: n }, () => 0);
  let flag;

  const combi = (s, l) => {
    if (dy[s][l] > 0) return dy[s][l];
    if (l === 0 || s === l) return 1;
    else return (dy[s][l] = combi(s - 1, l - 1) + combi(s - 1, l));
  };

  const DFS = (l, sum) => {
    if (flag) return;
    if (l === n && sum === big) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[l] = i;
          DFS(l + 1, sum + b[l] * p[l]);
          ch[i] = 0;
        }
      }
    }
  };
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);

  return answer;
};

console.log(solution(4, 16));
