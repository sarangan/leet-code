const expend = (nums, targetIndex) => {
  let l = targetIndex, r = targetIndex;
  while (nums[--l] === nums[targetIndex]) {
  }
  while (nums[++r] === nums[targetIndex]) {
  }
  return [l + 1, r - 1];
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return expend(nums, mid);
    if (nums[mid] > target) r = mid - 1;
    if (nums[mid] < target) l = mid + 1;
  }
  return [-1, -1];
};


console.log(searchRange([1, 1], 1));