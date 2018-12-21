/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0, r = nums.length - 1;
  let mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    console.log(l, r, mid);
    if (nums[mid] === target) return mid;
    if (nums[l] < nums[mid]) {
      if (target <= nums[mid] && target >= nums[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  if (nums[l] === target) return l;
  if (nums[r] === target) return r;
  return -1;
};


console.log(search([3, 1], 1));
