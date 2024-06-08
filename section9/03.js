const solution = (arr) => {
  let cnt = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const DFS = (x, y) => {
    if (x === 6 && y === 6) {
      cnt++;
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx <= 6 && ny <= 6 && ny >= 0 && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  };

  arr[0][0] = 1;
  DFS(0, 0);

  return cnt;
};

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
