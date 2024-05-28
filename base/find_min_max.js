const arr = [1, 2, 3, 2, 6, 4];

const findMin = (arr) => {
  let index = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      index = i;
    }
  }
  return { index, min };
};

const findMax = (arr) => {
  let index = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (min < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return { index, max };
};
