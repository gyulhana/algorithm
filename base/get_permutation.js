// 조합 : 서로 다른 경우 n개 중에 r개를 선택하는 경우의 수를 의미 한다.
// 조합은 순서가 없으므로 순서가 다른 조합도 하나의 조합으로 취급한다. 중복이 불가능하다.
const getCombinations = function (arr, selectNumber) {
  const results = [];
  // 배열 중 1개를 선택하는 경우 모든 요소를 1개짜리 배열에 담아 return
  if (selectNumber === 1) return arr.map((value) => [value]);

  // 1) 한 요소를 fixed한 후 나머지를 조합해서 붙인다.
  arr.forEach((fixed, index, origin) => {
    // 2) fixed를 제외한 나머지 배열 구하기
    const rest = origin.slice(index + 1);
    // 3) 나머지 배열을 조합하기
    const combinations = getCombinations(rest, selectNumber - 1);
    // 4) fixed와 나머지 조합 합치기
    const attached = combinations.map((combination) => [fixed, ...combination]);
    // 합친 조합을 배열에 추가
    results.push(...attached);
  });

  return results;
};

// 순열 : 조합과 달리 순서가 중요하다. [1, 2, 3] != [3, 2, 1] != [1, 3, 2]

const getPermutations = function (arr, selectNumber) {
  const results = [];
  // 배열 중 1개를 선택하는 경우 모든 요소를 1개짜리 배열에 담아 return
  if (selectNumber === 1) return arr.map((value) => [value]);

  // 1) 한 요소를 fixed한 후 나머지를 순열로 세운다.
  arr.forEach((fixed, index, origin) => {
    // 2) fixed를 제외한 나머지 배열 구하기
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 3) 나머지 배열로 순열세우기
    const permutations = getPermutations(rest, selectNumber - 1);
    // 4) fixed와 나머지 순열 합치기
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    // 5) 합친 순열을 배열에 추가
    results.push(...attached);
  });

  return results;
};

// 부분 집합 : 가능한 모든 경우의 수를 구함. 한 원소에 대해서 포함을 하거나 (선택을 하거나),
// 포함을 하지 않는다(선택을 하지 않는다). 즉, 한 원소 당 2가지의 경우의 수가 있다.

// [1,2,3] 의 부분 집합 : [1],[2],[3],[1,2],[2,3],[1,3],[1,2,3]

let arr = [1, 2, 3, 4];
let result = [];

for (let i = 1; i < 1 << arr.length; i++) {
  result.push([]);
  for (let j = 0; j < arr.length; j++) {
    if (i & (1 << j)) result[i - 1].push(arr[j]);
  }
}

console.log(result);
// [[1],[2],[1, 2],[3],[1, 3],[2, 3],[1, 2, 3],[4],[1, 4],[2, 4],[1, 2, 4],[3, 4],[1, 3, 4],[2, 3, 4],[1, 2, 3, 4]]

// 완전 탐색
let set = new Set();

numOfCase([1, 7], "");

function numOfCase(arr, str) {
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      let copy = [...arr];
      copy.splice(i, 1);
      numOfCase(copy, str + arr[i]);
    }
  }
  if (str > 0) set.add(Number(str));
}
console.log(Array.from(set)); // [17, 1, 71, 7]

// 완전 탐색 브루트포스
const vowels = ["a", "e", "i", "o", "u"];

const generateWords = (length, currentWord, allWords) => {
  if (length === 0) {
    allWords.push(currentWord);
    return;
  }
  for (let i = 0; i < vowels.length; i++) {
    generateWords(length - 1, currentWord + vowels[i], allWords);
  }
};

const resultArr = [];
generateWords(5, "", resultArr);
