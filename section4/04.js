function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let count = 1;
    let money = m - (product[i][0] / 2 + product[i][1]);
    for (let j = 0; j < n; j++) {
      const price = product[j][0] + product[j][1];
      if (j !== i && price > money) break;
      if (j !== i && price <= money) {
        money -= price;
        count++;
      }
    }
    // 최댓값 선택해서 답 변경하기 배열로 넣어서 나중에 최댓값 뽑아도 됨
    answer = Math.max(answer, cnt);
  }
  return answer;
}

const array = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, array));
