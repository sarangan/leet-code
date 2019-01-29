/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const combinations = [];

  const isPalindrome = s => s === s.reverse();

  backtrace([], 0);
  return combinations;
};


const s = 'aab';
console.log(partition(s));