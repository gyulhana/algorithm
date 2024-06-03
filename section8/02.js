const solution = (n) => {
  let string = "";
  const convert = (num) => {
    if (num === 0) return;
    else {
      const rest = num % 2;
      num = Math.floor(num / 2);
      convert(num);
      string += rest;
    }
  };
  convert(n);
  console.log(string);
};

solution(11);
