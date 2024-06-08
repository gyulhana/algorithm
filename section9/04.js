const solution = (n) => {
  let answer = "";
  const queue = [];
  queue.push(1);

  while (queue.length) {
    const v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }

  console.log(answer);
};

solution(7);
