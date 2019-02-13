/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (n === 0) return 0;
  const stack = [n];
  const memo = {};
  const root = Math.floor(Math.sqrt(n));
  let depth = 0;

  while (stack.length !== 0) {
    depth++;
    const stacklen = stack.length;
    for (let t = 0; t < stacklen; t++) {
      const curr = stack.shift();
      for (let i = 1; i <= root; i++) {
        const next = curr - i * i;
        if (memo[next]) continue;
        if (next === 0) return depth;
        if (next > 0) stack.push(next);
        memo[next] = true;
      }
    }
  }
};


console.log(numSquares(7168));