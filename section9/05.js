const solution = (s, e) => {
  let answer = 0;
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);

  const queue = [];
  ch[s] = 1;
  queue.push(s);

  dis[s] = 0;

  while (queue.length) {
    const x = queue.shift();

    for (let nx of [x + 5, x + 1, x - 1]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
};

console.log(solution(5, 14));
console.log(solution(8, 3));
