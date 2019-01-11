/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const result = [];

  const next = (n, path) => {
    if (n === 0) {
      result.push(path);
      return;
    }
    if (n < 0) return;

    for (const c of [1, 2]) {
      path.push(c);
      next(n - c, path);
    }
  };

  next(n, []);
  return result.length;
};

console.log(climbStairs(38));