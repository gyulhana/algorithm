const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 2;
let count = 0;
const data = [];

rl.on("line", function (line) {
  data.push(line);
  count++; // data를 입력받으면 count를 증가시켜주고

  if (count === N) {
    // count가 N일때 rl.close()를 호출해준다.
    rl.close();
  }
}).on("close", function () {
  // rl.close()를 호출하면 이 콜백함수로 들어오고
  const n = +data[0];
  const problems = data[1].split(" ").map(Number);

  let index = 1;
  const stack = Array(4).fill(0);

  problems.sort((a, b) => a - b);

  while (problems.length) {
    const current = problems.shift();

    if (current > stack[index - 1]) {
      stack[index] = current;
      index++;
    }
  }

  console.log(stack.filter((el) => el !== 0).length >= 3 ? "YES" : "NO");

  process.exit(); // 프로세스를 종료한다.
});
