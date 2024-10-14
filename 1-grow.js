// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

function countBy(x, n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i * x);
  }

  return result;
}
