function solution(arr) {
  const reverses = [];
  const answer = [];
  for (const x of arr) {
    const reverse = parseInt(x.toString().split("").reverse().join(""));
    reverses.push(reverse);
  }
  for (let i = 0; i < reverses.length; i++) {
    for (let j = 2; j < reverses[i]; j++) {
      if (reverses[i] % j === 0) {
        answer.push(reverses[i]);
        break;
      }
    }
  }
  return reverses.filter((r) => r !== 1 && answer.indexOf(r) === -1);
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
