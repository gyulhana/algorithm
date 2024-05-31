const solution = (numbers) => {
  const arr = [...numbers];
  const length = numbers.length;
  const answer = [];

  while (answer.length < length) {
    let idx = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[idx] > arr[i]) idx = i;
    }
    answer.push(arr[idx]);
    arr.splice(idx, 1);
  }

  console.log(answer);
};

solution([11, 7, 5, 6, 10, 9]);

const secondSolution = (numbers) => {
  const arr = [...numbers];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    // 현재 값을 temp에 저장하고
    let j;
    for (j = i - 1; j >= 0; j--) {
      // 현재 값보다 큰 애들이 나오면 우측으로 밀면서 감
      if (temp < arr[j]) arr[j + 1] = arr[j];
      // 현재 값보다 작은 값이 나왔을 때
      else break;
    }
    // 작은 값 바로 뒤에 현재 값을 삽입함
    arr[j + 1] = temp;
  }
  console.log(arr);
};

secondSolution([11, 7, 5, 6, 10, 9]);
