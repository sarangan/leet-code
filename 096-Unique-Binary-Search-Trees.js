/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const memo = {};
  return helper(1, n, memo);
};

function helper (l, r, memo) {
  if (l >= r) return 1;

  let sum = 0;
  let index = l;
  if (memo[`${l}-${r}`]) return memo[`${l}-${r}`];

  while (index <= r) {
    const ls = helper(l, index - 1, memo);
    const rs = helper(index + 1, r, memo);
    sum += ls * rs;
    index++;
  }
  memo[`${l}-${r}`] = sum;
  return sum;
}


console.log(numTrees(5));