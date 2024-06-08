const solution = (board) => {
  let answer = 0;
  const length = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const DFS = (x, y) => {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (
        nx >= 0 &&
        nx < length &&
        ny >= 0 &&
        ny < length &&
        board[nx][ny] === 1
      ) {
        DFS(nx, ny);
      }
    }
  };

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
};

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
