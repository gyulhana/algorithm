// 마구간 구하기 결정알고리즘 이해하기 어려움..

const count = (arr, mid) => {
  let cnt = 1;
  let ep = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= mid) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
};

const solution = (n, arr) => {
  arr.sort((a, b) => a - b);

  let answer;

  let lt = 1;
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(arr, mid) >= n) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
};

solution(3, [1, 2, 8, 4, 9]);
