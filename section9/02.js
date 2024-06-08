const solution = (n, m, arr) => {
  const table = Array.from({ length: n + 1 }, () => Array());
  const ch = Array(n + 1).fill(0);
  let cnt = 0;

  for (const [x, y] of arr) {
    table[x].push(y);
  }

  console.log(table);

  const DFS = (l) => {
    if (l === 5) {
      cnt++;
    } else {
      for (let i = 0; i < table[l].length; i++) {
        if (ch[table[l][i]] === 0) {
          ch[table[l][i]] = 1;
          DFS(table[l][i]);
          ch[table[l][i]] = 0;
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
