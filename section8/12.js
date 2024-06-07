const solution = (n, r) => {
  let answer;
  const dy = Array.from(Array(35), () => Array(35).fill(0));

  const DFS = (s, l) => {
    if (dy[s][l] > 0) return dy[s][l];
    if (s === l || l === 0) return 1;
    else {
      return (dy[s][l] = DFS(s - 1, l - 1) + DFS(s - 1, l));
    }
  };

  answer = DFS(n, r);
  return answer;
};

console.log(solution(33, 19));

// 메모이제이션
