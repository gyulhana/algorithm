const solution = (n, m, arr) => {
  const table = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const ch = Array(n + 1).fill(0);
  let cnt = 0;

  for (const [x, y] of arr) {
    table[x][y] = 1;
  }

  console.log(table);

  const DFS = (l) => {
    if (l === 5) {
      cnt++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0 && table[l][i] === 1) {
          ch[l] = 1;
          DFS(i);
          ch[l] = 0;
        }
      }
    }
  };

  ch[1] = 1;
  DFS(1);

  return cnt;
};

console.log(
  solution(5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
