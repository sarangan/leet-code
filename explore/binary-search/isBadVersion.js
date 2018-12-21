/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if (n === 1) return 1;
    let l = 0, r = n;
    let mid;

    while (r - l > 1) {
      mid = Math.floor((l + r) / 2);
      if (isBadVersion(mid)) {
        r = mid;
      } else {
        l = mid;
      }
    }
    return isBadVersion(mid) ? mid : mid + 1;
  };
};

