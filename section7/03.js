// 버블 정렬

const solution = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let idx = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[idx] > numbers[j]) {
        [numbers[idx], numbers[j]] = [numbers[j], numbers[idx]];
      }
    }
  }
  console.log(numbers);
};

solution([1, 2, 3, -3, -2, 5, 6, -6]);

// 선택 정렬

const secondSolution = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let idx = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[idx] > numbers[j]) {
        idx = j;
      }
    }
    [numbers[idx], numbers[i]] = [numbers[i], numbers[idx]];
  }
  console.log(numbers);
};

secondSolution([1, 2, 3, -3, -2, 5, 6, -6]);

// 양의 정수와 음의 정수 위치에 변화가 없이 음수, 양수 나누는 문제였다..! 문제 제대로 읽기

// 버블 정렬로 음수일 때 양수일 때만 변경해주면 된다!!

const thirdSolution = (arr) => {
  const numbers = [...arr];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > 0 && numbers[j + 1] < 0) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  console.log(numbers);
};

thirdSolution([1, 2, 3, -3, -2, 5, 6, -6]);
