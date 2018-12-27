/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (obj[n] !== undefined) {
      if (i - obj[n] <= k) return true;
      obj[n] = i;
    }
    obj[n] = i;
  }
  return false;
};

// const nums = [1, 2, 3, 1], k = 3;
const nums = [1, 0, 1, 0], k = 1;
console.log(containsNearbyDuplicate(nums, k));