/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let l = 0, r = num;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (mid * mid === num) return true;
    if (mid * mid < num) l = mid + 1;
    if (mid * mid > num) r = mid - 1;
  }
  return false;
};


console.log(isPerfectSquare(0));



