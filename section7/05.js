const solution = (n, arr) => {
  const queue = [];

  for (const x of arr) {
    if (!queue.includes(x) && queue.length === n) {
      queue.pop();
      queue.unshift(x);
    } else if (queue.includes(x)) {
      const index = queue.indexOf(x);

      for (let i = index; i > 0; i--) {
        [queue[i], queue[i - 1]] = [queue[i - 1], queue[i]];
      }
    } else {
      queue.unshift(x);
    }
  }

  console.log(queue);
};

solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7, 10, 7, 11]);

const secondSolution = (n, arr) => {
  const answer = Array.from(Array(n), () => 0);

  for (const x of arr) {
    let pos = -1;
    // includes 확인
    for (let i = 0; i < answer.length; i++) {
      if (x === answer[i]) pos = i;
    }
    if (pos === -1) {
      for (let i = answer.length - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    }
  }
  console.log(answer);
};

secondSolution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
