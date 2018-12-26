/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let maxSize = Number.MAX_VALUE, l = 0, r = 0, sum = 0;
  for (; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= s) {
      sum -= nums[l];
      if (sum < s) maxSize = Math.min(maxSize, r - l + 1);
      l++;
    }
  }
  if (maxSize === Number.MAX_VALUE) return 0;
  return maxSize;
};

// const s = 11, nums = [1, 2, 3, 4, 5];
const s = 7, nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(s, nums));