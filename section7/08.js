const solution = (arr) => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  const cnt = [];

  for (let i = 0; i < arr.length; i++) {
    const a = arr.slice(i);
    const stack = [];

    for (const x of a) {
      if (stack.length === 0) {
        stack.push(x);
      } else {
        const last = stack[stack.length - 1];
        if (last[1] <= x[0]) {
          stack.push(x);
        }
      }
    }
    cnt.push(stack.length);
  }

  console.log(Math.max(...cnt));
};

solution([
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]);

solution([
  [3, 3],
  [1, 3],
  [2, 3],
]);

// 그리디
// 가장 빨리 끝나는 시간으로 정렬

const secondSolution = (arr) => {
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let et = 0;
  let cnt = 0;

  for (const x of arr) {
    if (et <= x[0]) {
      cnt++;
      et = x[1];
    }
  }
  console.log(cnt);
};

secondSolution([
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]);

secondSolution([
  [3, 3],
  [1, 3],
  [2, 3],
]);
