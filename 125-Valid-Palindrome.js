/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const t = s.split('').filter(e => /[a-zA-Z0-9]/.test(e));
  let l = 0, r = t.length - 1;
  while (l <= r) {
    if(t[l].toLowerCase() !== t[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));