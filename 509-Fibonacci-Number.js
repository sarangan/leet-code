/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  const memo = {};
  return helper(N, memo);
};

function helper (N, memo) {
  if (memo[N]) return memo[N];
  if (N < 2) return N;
  return memo[N] = helper(N - 1, memo) + helper(N - 2, memo);
}

console.log(fib(10));

