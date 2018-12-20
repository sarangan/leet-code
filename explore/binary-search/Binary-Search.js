/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((r - l) / 2 + l);
    if (nums[mid] === target) return mid;
    if (target > nums[mid]) l = mid + 1;
    if (target < nums[mid]) r = mid - 1;
  }
  return -1;
};


console.log(search([1], 1));


var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
};
