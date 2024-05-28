const solution = (number, array) => {
  let answer = 0;

  for (let right = 0; right < array.length; right++) {
    let sum = 0;

    sum += array[right];
    if (sum <= number) {
      answer++;
    }
    if (right !== 0) {
      for (let left = 0; left < right; left++) {
        sum += array[left];
        if (sum <= number) {
          answer++;
        }
      }
    }
  }

  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));

const secondSolution = (number, array) => {
  let answer = 0;

  let left = 0;
  let sum = 0;

  for (let right = 0; right < array.length; right++) {
    sum += array[right];
    while (sum > number) {
      sum -= array[left];
      left++;
    }
    answer += right - left + 1;
  }

  return answer;
};

console.log(secondSolution(5, [1, 3, 1, 2, 3]));
