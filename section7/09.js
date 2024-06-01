const solution = (arr) => {
  const a = arr.flatMap((x) =>
    Array.from(Array(x[1] - x[0]), (_, i) => x[0] + i)
  );

  const hash = new Map();

  for (const x of a) {
    hash.has(x) ? hash.set(x, hash.get(x) + 1) : hash.set(x, 1);
  }

  let hour = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, val] of hash) {
    if (val > max) {
      hour = key;
      max = val;
    }
  }

  console.log(max);
};

solution([
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]);

const secondSolution = (times) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];

  for (const x of times) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;

  for (const x of timeLine) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  console.log(answer);
};

secondSolution([
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]);
