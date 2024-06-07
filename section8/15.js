const solution = (k, n, m, arr) => {
  let cnt = 0;
  const tmp = Array.from({ length: n });

  const DFS = (l, s, sum) => {
    if (l === n) {
      console.log(tmp, sum);
      if (sum % m === 0) cnt++;
    } else {
      // k개 만큼 돌아야 된다는 걸 n개 만큼 돌아야 된다고 착각함
      for (let i = s; i < k; i++) {
        tmp[l] = arr[i];
        DFS(l + 1, i + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0, 0);
  return cnt;
};

console.log(solution(5, 3, 6, [2, 4, 5, 8, 12]));
