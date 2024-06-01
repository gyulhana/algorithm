const solution = (num, arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (
        arr[j][0] > arr[j + 1][0] ||
        (arr[j][0] === arr[j + 1][0] && arr[j][1] > arr[j + 1][1])
      ) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
};

solution(5, [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
]);
