const solution = (str1, str2) => {
  const hash1 = new Map();
  const hash2 = new Map();

  for (const x of str1) {
    if (!hash1.has(x)) {
      hash1.set(x, 1);
    } else {
      hash1.set(x, hash1.get(x) + 1);
    }
  }

  for (const x of str2) {
    if (!hash2.has(x)) {
      hash2.set(x, 1);
    } else {
      hash2.set(x, hash2.get(x) + 1);
    }
  }

  for (let [key, val] of hash1) {
    if (hash2.get(key) !== val) return "NO";
  }

  return "YES";
};

// 포함하고 있지만 다른 스펠링이 더 있을 때를 해결하지 못 함
console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));

const secondSolution = (str1, str2) => {
  const hash1 = new Map();

  for (const x of str1) {
    if (!hash1.has(x)) {
      hash1.set(x, 1);
    } else {
      hash1.set(x, hash1.get(x) + 1);
    }
  }

  for (const x of str2) {
    if (!hash1.has(x) || hash1.get(x) === 0) return "NO";
    hash1.set(x, hash1.get(x) - 1);
  }

  // 만약 주어진 문자열이 길이가 같지 않다면 필요한 조건
  for (let [_, val] of hash1) {
    if (val > 0) return "NO";
  }

  return "YES";
};

// 포함하고 있지만 다른 스펠링이 더 있을 때를 해결하지 못 함
console.log(secondSolution("AbaAeCe", "baeeACA"));
console.log(secondSolution("abaCC", "Caaab"));
