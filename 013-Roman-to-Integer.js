/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
  let r = 0;
  s.split('').forEach((v, i, arr) => {
    r += map[v] >= (map[arr[i + 1]] || 0) ? map[v] : -map[v];
  });
  return r;
};


console.log(romanToInt('XIV'));