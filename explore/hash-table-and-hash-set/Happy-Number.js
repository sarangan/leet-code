/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const obj = {};
  while (obj[n] === undefined) {
    obj[n] = n;
    n = parseInt(n.toString().split('').reduce((p, n) => (+p + +n * +n).toString(), 0));
    if (+n === 1) return true;
  }
  return false;
};


console.log(isHappy(7));