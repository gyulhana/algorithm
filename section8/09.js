const solution = (arr, m) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  const DFS = (l, sum) => {
    if (l > answer) return;
    if (sum >= m) return;
    if (sum === m) {
      answer = Math.min(answer, l);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(l + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(solution([1, 2, 5], 15));
