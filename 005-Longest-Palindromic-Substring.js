function spreadCheck(arr, left, right) {
  const [bottom, up] = [0, arr.length - 1];
  let l = left, r = right;
  if (arr[l] !== arr[r]) return '';

  let result = l === r
    ? [arr[l]]
    : [arr[l], arr[r]];

  while (--l >= bottom && ++r <= up) {
    if (arr[l] === arr[r]) {
      result.push(arr[r]);
      result.unshift(arr[l]);
    } else {
      break;
    }
  }
  return result.join('');
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const sa = s.toString().split('');
  return sa
    .map((_, i) => {
      const n = spreadCheck(sa, i, i);
      const n1 = spreadCheck(sa, i, i + 1);
      return n.length > n1.length ? n : n1;
    })
    .reduce((p, n) => p.length > n.length ? p : n, '');
};


console.log(longestPalindrome("avaa"));