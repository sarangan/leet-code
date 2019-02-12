var myPow = function (x, n) {
  if (n < -(2 ** 31) || n > 2 ** 31 - 1) return 1;
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  const formula = myPow(x, Math.floor(n / 2));

  return (n % 2 === 0)
    ? formula * formula
    : formula * formula * x;
};