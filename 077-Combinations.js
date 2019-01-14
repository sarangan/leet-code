/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const stack = [];

  const traverse = (comb, lastNum) => {
    if (comb.length === k) {
      stack.push(comb.concat());
      return;
    }

    for (let i = lastNum; i <= n; i++) {
      traverse([...comb, i], i + 1);
    }
  };

  traverse([], 1);
  return stack;
};


console.log(combine(4, 2));


