/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = [-1];
  let longest = 0;

  s.split('').forEach((c, i) => {
    if (c === '(') stack.push(+i);
    if (c === ')') {
      stack.pop();
      if (stack.length === 0) stack.push(+i);
      longest = Math.max(longest, i - stack[stack.length - 1]);
    }
  });
  return longest;
};


console.log(longestValidParentheses('(()'));