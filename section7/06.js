// 틀린 풀이

const solution = (arr) => {
  let hs;
  let partner;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      !hs ? (hs = i) : (partner = i);
    }
  }

  console.log(hs + 1, partner + 2);
};

solution([120, 125, 152, 130, 135, 135, 143, 127, 160]);
solution([120, 130, 150, 150, 130, 150]);

// 정렬을 한 다음에 다른 값을 찾기

const secondSolution = (arr) => {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }

  let h, p;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== arr[i]) {
      if (h) p = i;
      else h = i;
    }
  }

  console.log(h + 1, p + 1);
};

secondSolution([120, 125, 152, 130, 135, 135, 143, 127, 160]);
secondSolution([120, 130, 150, 150, 130, 150]);
