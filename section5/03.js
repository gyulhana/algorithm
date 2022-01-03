function solution(number, array) {
  const temp = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length + 1; j++) {
      temp.push(array.slice(i, j));
    }
  }
  const answer = [];
  temp.map((el) => {
    let sum = 0;
    for (const x of el) sum += x;
    if (sum === 6) answer.push(el);
  });
  return answer;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
