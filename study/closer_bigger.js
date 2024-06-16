function solution(numbers) {
  const arr = Array.from({ length: numbers.length }, () => -1);

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] > numbers[i]) {
        arr[i] = numbers[j];
        break;
      }
    }
  }
  return arr;
}
