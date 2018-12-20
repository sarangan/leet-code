/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const results = [];

  const backtrace = (s, l, r) => {
    if (l > r) return;
    if (l === 0 && r === 0) {
      results.push(s);
      return;
    }

    if (l > 0) backtrace(s + '(', l - 1, r);
    if (r > 0) backtrace(s + ')', l, r - 1);
  };

  backtrace('', n, n);
  return results;
};


console.log(generateParenthesis(3));