const solution = (numbers) => {
  const length = numbers.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  return numbers;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
