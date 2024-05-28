const solution = (str, word) => {
  const hash = new Map();
  let answer = 0;

  for (const x of word) {
    if (!hash.has(x)) hash.set(x, 1);
    else hash.set(x, hash.get(x) + 1);
  }

  for (let right = word.length; right <= str.length; right++) {
    const now = str.slice(right - word.length, right);
    const temp = new Map(hash.entries());

    const check = (s) => {
      for (const x of s) {
        if (!temp.has(x) || temp.get(x) === 0) return false;
        temp.set(x, temp.get(x) - 1);
      }
      return true;
    };

    if (check(now)) {
      answer++;
    }
  }

  return answer;
};

console.log(solution("bacaAacba", "abc"));

const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) return false;

  for (let [key, val] of map1) {
    if (!map2.has(key)) return false;
    if (map2.get(key) !== val) return false;
  }

  return true;
};

const secondSolution = (str, word) => {
  const tH = new Map();
  const sH = new Map();
  let answer = 0;

  // word의 hash map
  for (const x of word) {
    if (!tH.has(x)) tH.set(x, 1);
    else tH.set(x, tH.get(x) + 1);
  }

  for (let i = 0; i < word.length - 1; i++) {
    if (!sH.has(str[i])) sH.set(str[i], 1);
    else sH.set(str[i], sH.get(str[i]) + 1);
  }

  let left = 0;

  for (let right = word.length - 1; right < str.length; right++) {
    if (!sH.has(str[right])) sH.set(str[right], 1);
    else sH.set(str[right], sH.get(str[right]) + 1);

    if (compareMaps(sH, tH)) answer++;

    sH.set(str[left], sH.get(str[left]) - 1);
    if (sH.get(str[left]) === 0) sH.delete(str[left]);
    left++;
  }

  return answer;
};

console.log(secondSolution("bacaAacba", "abc"));
