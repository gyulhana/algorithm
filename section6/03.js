const solution = (board, moves) => {
  const stack = [];
  let answer = 0;

  for (const x of moves) {
    for (let i = 0; i < 5; i++) {
      if (board[i][x - 1] !== 0) {
        const last = stack.pop();
        console.log(i, x - 1, board[i][x - 1], last);
        if (board[i][x - 1] === last) {
          answer += 2;
        } else {
          last ? stack.push(last) : null;
          stack.push(board[i][x - 1]);
        }
        board[i][x - 1] = 0;
        console.log(stack);
        break;
      }
    }
  }

  return answer;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
