const solution = (n, k) => {
  const arr = Array.from(Array(n), (_, i) => i + 1);

  let i = 1;

  while (arr.length > 1) {
    const first = arr.shift();
    if (i !== k) {
      arr.push(first);
      i++;
    } else {
      i = 1;
    }
  }

  return arr[0];
};

console.log(solution(8, 3));

const secondSolution = (n, k) => {
  const arr = Array.from(Array(n), (_, i) => i + 1);

  while (arr.length) {
    for (let i = 1; i < k; i++) {
      arr.push(arr.shift());
    }
    arr.shift();
    if (arr.length === 1) return arr[0];
  }
};

console.log(secondSolution(8, 3));
