const solution = (min, problems) => {
  let answer = Number.MIN_SAFE_INTEGER;

  const DFS = (index, sum, time) => {
    if (index === problems.length) {
      if (time <= min) {
        answer = Math.max(answer, sum);
      }
    } else {
      DFS(index + 1, sum + problems[index][0], time + problems[index][1]);
      DFS(index + 1, sum, time);
    }
  };

  DFS(0, 0, 0);

  return answer;
};

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
