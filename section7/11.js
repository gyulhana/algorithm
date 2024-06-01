const count = (arr, n) => {
  let cnt = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] > n) {
      cnt++;
      sum = arr[i];
    } else sum += arr[i];
  }
  return cnt;
};

const solution = (n, arr) => {
  let start = Math.max(...arr);
  let end = arr.reduce((a, c) => a + c, 0);
  let answer;

  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (count(arr, mid) <= n) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
};

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
