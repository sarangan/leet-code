/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums.length === 0) return false;
  if (nums.length === 1) return nums[0] === target;

  if (nums[0] < nums[nums.length - 1]) { // have
    let l = 0, r = nums.length - 1;
    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);
      console.log(l, r, mid);
      if (nums[mid] === target) return true;
      if (nums[mid] < target) l = mid + 1;
      if (nums[mid] > target) r = mid - 1;
    }
    return false;
  } else { // dont have pivot
    let l = 0, r = nums.length - 1;
    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);
      console.log(l, r, mid);
      if (target === nums[mid]) return true;
      if (nums[l] <= nums[mid]) { // left is sorted
        if (target >= nums[l] && target <= nums[mid]) r = mid - 1;
        else l = mid + 1;
      } else { // right is sorted
        if (target >= nums[mid + 1] && target <= nums[r]) l = mid + 1;
        else r = mid - 1;
      }
    }
    return false;
  }
};

const nums = [1, 1, 3, 1], target = 3;
console.log(search(nums, target));