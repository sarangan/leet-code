/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sorted = nums.sort((p, n) => p - n);
  const result = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    // remove duplicated
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    const index = sorted[i];
    let l = i + 1, r = sorted.length - 1;
    while (l < r) {
      // console.log(l, r);
      const total = sorted[l] + sorted[r];
      if (total === -index) {
        result.push([index, sorted[l], sorted[r]]);

        while (l + 1 < r && sorted[l + 1] === sorted[l]) l++;
        while (r - 1 > l && sorted[r - 1] === sorted[r]) r--;
        l++;
        r--;
      }
      if (total < -index) {
        l++;
      }
      if (total > -index) {
        r--;
      }
    }
  }
  return result;
};


console.log(threeSum([-1, 0, 1, 1, 2, -1, -4]));