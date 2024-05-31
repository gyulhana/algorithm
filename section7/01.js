const solution = (numbers) => {
  const answer = [];
  const length = numbers.length;

  while (answer.length < length) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
        minIndex = i;
      }
    }
    numbers.splice(minIndex, 1);
    answer.push(min);
  }

  return answer;
};

console.log(solution([13, 5, 11, 7, 23, 15]));

// 선택 정렬

const secondSolution = (numbers) => {
  const answer = [];
  const length = numbers.length;

  for (let i = 0; i < length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < length; j++) {
      if (numbers[j] < numbers[i]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 위치 교환
  }

  return answer;
};

console.log(secondSolution([13, 5, 11, 7, 23, 15]));
