/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let sign = '';
  if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) sign = '-';

  let multiple = 1;
  let sum = Math.abs(dividend);
  let root = Math.abs(divisor);
  while (sum >= root) {
    sum -= root;
    multiple += multiple;
  }
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, +(sign + multiple)));
};

console.log(divide(-8, 2));
