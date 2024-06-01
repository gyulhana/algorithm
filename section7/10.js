const solution = (n, arr) => {
  arr.sort((a, b) => a - b);

  let mid;

  let start = 0;
  let end = arr.length - 1;
  let answer;

  while (start <= end) {
    console.log(start, end, mid);
    mid = parseInt((start + end) / 2);

    if (n === arr[mid]) {
      answer = mid;
      break;
    } else if (n > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(answer + 1);
};

solution(32, [23, 87, 65, 12, 57, 32, 99, 81]);
