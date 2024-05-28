// first
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
  count++;

  if (count === N) {
    rl.close();
  }
}).on("close", function () {
  const n = +data[0];
  const problems = data[1].split(" ").map(Number);

  console.log(n, problems);
  process.exit();
});

// second
const readline = require("readline");

(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  const data = [];

  for await (const line of rl) {
    data.push(line);
    if (data.length === parseInt(data[0]) + 1) {
      rl.close();
    }
  }

  const N = parseInt(data[0]);
  const board = data.slice(1).map(Number);

  let cnt = 1;
  let maxNum = board[N - 1];

  for (let i = N - 2; i >= 0; i--) {
    if (maxNum < board[i]) {
      cnt++;
      maxNum = board[i];
    }
  }

  console.log(cnt);

  process.exit();
})();
