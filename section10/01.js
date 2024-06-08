const solution = (n) => {
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
};

console.log(solution(7));

/* 동적 계획법

한 번에 풀기에는 어려운 문제를 작은 단위로 쪼개어 문제의 앞에만 있다고 생각해서
그 답을 기록해놓고 문제를 조금씩 넓히면서 구하는 것 > 점화식



*/
