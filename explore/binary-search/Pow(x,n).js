/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < -(2 ** 31) || n > 2 ** 31 - 1) return 0;
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === 2) return x * x;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    return myPow(x, n / 2) * myPow(x, n / 2);
  } else {
    const formula = myPow(x, Math.floor(n / 2));
    return x * formula * formula;
  }
};

console.log(myPow(1, -2147483648));
