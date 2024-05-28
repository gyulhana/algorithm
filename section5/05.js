const solution = (n, array) => {
  let left = 1;
  let sum = array.slice(0, n).reduce((a, b) => a + b, 0);
  let max = sum;

  for (let right = n; right < array.length; right++) {
    const now = sum + array[right] - array[left - 1];

    left++;

    max = Math.max(now, max);
    sum = now;
  }

  return max;
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

// sliding window
const secondSolution = (n, array) => {
  let sum = array.slice(0, n).reduce((a, b) => a + b, 0);
  let answer = 0;

  for (let right = n; right < array.length; right++) {
    sum += array[right] - array[right - n];
    answer = Math.max(answer, sum);
  }

  return answer;
};

console.log(secondSolution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
