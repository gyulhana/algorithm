const solution = (nums) => {
  let answer = "NO";
  let check = Array.from({ length: nums.length }, () => 0);

  const DFS = (v) => {
    if (v === nums.length) {
      let checked = [];
      let none = [];

      for (let i = 0; i < nums.length; i++) {
        if (check[i]) checked.push(nums[i]);
        else none.push(nums[i]);
      }
      const sum = checked.reduce((a, c) => a + c, 0);
      const ns = none.reduce((a, c) => a + c, 0);

      if (sum === ns) {
        answer = "YES";
        console.log(checked, none);
      }
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  };

  DFS(0);

  return answer;
};

console.log(solution([1, 3, 5, 6, 7, 10]));

const secondSolution = (nums) => {
  let answer = "NO";
  const total = nums.reduce((a, c) => a + c, 0);

  const DFS = (v, sum) => {
    if (v === nums.length) {
      if (total - sum === sum) answer = "YES";
    } else {
      DFS(v + 1, sum + nums[v]);
      DFS(v + 1, sum);
    }
  };

  DFS(0, 0);

  return answer;
};

console.log(secondSolution([1, 3, 5, 6, 7, 10]));
