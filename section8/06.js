const solution = (c, dogs) => {
  let answer = Number.MIN_SAFE_INTEGER;

  const DFS = (index, sum) => {
    if (index === dogs.length) {
      if (sum <= c) {
        answer = Math.max(answer, sum);
      }
    } else {
      DFS(index + 1, sum + dogs[index]);
      DFS(index + 1, sum);
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution(259, [81, 58, 42, 33, 61]));
