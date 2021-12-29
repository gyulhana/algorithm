function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let maxNumber = "";
  for (const el of arr) {
    // const sum = el.toString().split("").reduce((a, b) => a + Number(b), 0);
    const ell = String(el);
    let sum = 0;
    for (let i = 0; i < ell.length; i++) {
      sum += parseInt(ell[i]);
    }
    if (sum > max) {
      maxNumber = el;
      max = sum;
    } else if (sum === max) {
      if (el > maxNumber) {
        maxNumber = el;
        max = sum;
      }
    }
  }
  return maxNumber;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
