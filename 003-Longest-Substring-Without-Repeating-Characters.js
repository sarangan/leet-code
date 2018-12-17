/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0, j = 0, longestLength = 0;
  const obj = {};

  while (i < s.length && j < s.length) {
    if (!obj[s[j]]) {
      obj[s[j++]] = j;
      longestLength = Math.max(j - i, longestLength);
    } else {
      delete obj[s[i++]];
    }
  }
  return longestLength;
};


console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));