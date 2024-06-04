const solution = (n) => {
  let answer;
  const DFS = (l) => {
    if (l === 1) {
      return 1;
    } else {
      return l * DFS(l - 1);
    }
  };

  answer = DFS(5);
  console.log(answer);
};

solution(5);
