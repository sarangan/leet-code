function spreadCheck(arr, left, right) {
  const [bottom, up] = [0, arr.length - 1];
  let l = left, r = right;
  if (arr[l] !== arr[r]) return [0, 0];

  while (--l >= bottom & ++r <= up && arr[l] === arr[r]) {
    // console.log(arr[l], arr[r]);
  }
  return [l + 1, r - 1];
}

function compareLength(tuple0, tuple1) {
  const l0 = tuple0[1] - tuple0[0];
  const l1 = tuple1[1] - tuple1[0];
  return l0 > l1 ? tuple0 : tuple1;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const sa = s.toString().split('');
  const [l, r] = sa
    .map((_, i) => {
      const n = spreadCheck(sa, i, i);
      const n1 = spreadCheck(sa, i, i + 1);
      return compareLength(n, n1);
    })
    .reduce((p, n) => compareLength(p, n), [0, 0]);
  return s.substring(l, r + 1);
};


console.log(longestPalindrome("aava"));