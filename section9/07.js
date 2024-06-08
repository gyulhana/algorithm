const solution = (board) => {
  let answer = 0;
  const length = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const queue = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;

        while (queue.length) {
          const [x, y] = queue.shift();

          for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
              nx >= 0 &&
              nx < length &&
              ny >= 0 &&
              ny < length &&
              board[nx][ny] === 1
            ) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
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
