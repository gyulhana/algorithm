const solution = (n, string) => {
  const object = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  for (let i = 0; i < string.length; i++) {
    object[string[i]]++;
  }

  const frequency = Object.values(object);
  const freCandidate = Object.keys(object).filter((key) => {
    return object[key] === Math.max(...frequency);
  });

  return freCandidate[0];
};

console.log(solution(15, "BACBACCACCBDEDE"));

const secondSolution = (n, string) => {
  const hash = new Map();

  for (let i = 0; i < string.length; i++) {
    if (!hash.has(string[i])) {
      hash.set(string[i], 1);
    } else {
      hash.set(string[i], hash.get(string[i]) + 1);
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  let answer;

  for (let [key, val] of hash) {
    if (max < val) {
      answer = key;
      max = val;
    }
  }

  return answer;
};

console.log(secondSolution(15, "BACBACCACCBDEDE"));
