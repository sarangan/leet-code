/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) return false;

  for (let n of [2, 3, 5]) {
    while (num % n === 0) {
      num /= n;
    }
  }
  return num === 1;
};

console.log(isUgly(30));