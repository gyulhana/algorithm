function solution(arr1, arr2) {
  const answer = [];
  [...arr1, ...arr2]
    .sort()
    .filter((el) => arr1.indexOf(el) > -1 && arr2.indexOf(el) > -1)
    .map((el) => {
      if (answer.indexOf(el) === -1) answer.push(el);
    });
  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
