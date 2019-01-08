/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target && nums[mid + 1] > target) return mid + 1;
    if (nums[mid] > target && nums[mid - 1] < target) return mid;

    if (nums[mid] < target) l = mid + 1;
    if (nums[mid] > target) r = mid - 1;
  }
};


const n = [1, 3, 5, 6], target = 1;
console.log(searchInsert(n, target));
