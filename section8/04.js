const solution = (n) => {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      console.log(tmp.trim().split(" "));
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  };
  DFS(1);
};

console.log(solution(3));
