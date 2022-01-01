function solution(cards, k) {
  // 순열 찾기
  const getPermutations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((a) => [a]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const permutations = getPermutations(rest, selectNumber - 1); // 재귀
      console.log(permutations);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
    return results;
  };

  const cards_picks = getPermutations(cards, 3);

  // 순열의 합 구하기
  const cards_sum = [];
  for (const cards of cards_picks) {
    const sum = cards.reduce((a, b) => a + b, 0);
    cards_sum.push(sum);
  }

  // 순열의 합 중복 제거 > Set으로도 중복 제거 할 수 있음
  const new_sum = [];
  cards_sum.map((sum) => new_sum.indexOf(sum) === -1 && new_sum.push(sum));

  // k번째 값 리턴하기
  new_sum.sort((a, b) => b - a);
  return new_sum[k - 1];
}

const array = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(array, 3));
