// DFS (시간 초과)

function solution(sticker) {
  const check = Array.from({ length: sticker.length }, () => 0);
  let max = Number.MIN_SAFE_INTEGER;

  const DFS = (l, sum) => {
    if (l >= sticker.length) {
      max = Math.max(sum, max);
      return;
    }
    if (check[l] === 1) {
      DFS(l + 1, sum);
    } else {
      if (check[l] === 0) {
        const next = l === sticker.length - 1 ? 0 : l;
        const prev = l === 0 ? sticker.length - 1 : l;

        check[l] = 1;
        check[prev] = 1;
        check[next] = 1;
        DFS(l + 2, sum + sticker[l]);

        check[l] = 0;
        check[prev] = 0;
        check[next] = 0;
        DFS(l + 1, sum);
      }
    }
  };

  DFS(0, 0);

  return max;
}
