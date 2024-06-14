function solution(scoville, K) {
  if (K === 0 || scoville.every((a) => a >= K)) return 0;
  let cnt = 0;
  const maxCnt = scoville.length - 1;
  let tmp = scoville.sort((a, b) => a - b);

  while (cnt <= maxCnt) {
    tmp = tmp.sort((a, b) => a - b);
    const sum = tmp[0] + tmp[1] * 2;
    tmp.splice(0, 2, sum);
    cnt++;

    if (tmp.every((a) => a >= K)) return cnt;

    if (cnt > maxCnt) return -1;
  }

  return cnt;
}
