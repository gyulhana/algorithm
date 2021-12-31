function solution(students, tests, array) {
  // 답 예제, 아직 이해 필요함
  let answer = 0;
  for (let i = 1; i <= students; i++) {
    for (let j = 1; j <= students; j++) {
      let cnt = 0;
      for (let k = 0; k < tests; k++) {
        let pi = 0;
        let pj = 0;
        for (let l = 0; l < students; l++) {
          if (array[k][l] === i) pi = l;
          if (array[k][l] === j) pj = l;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === tests) answer++;
    }
  }
  return answer;
}

const array = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(4, 3, array));
