const solution = (n, arr) => {
  let answer = [];
  let tmp = Array.from({ length: n }, () => 0);
  let ch = Array.from({ length: arr.length }, () => 0);

  const DFS = (l) => {
    if (l === n) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[l] = arr[i];
          DFS(l + 1);
          ch[i] = 0;
        }
      }
    }
  };
  DFS(0);

  return answer;
};

console.log(solution(2, [3, 6, 9]));
