const findPivot = (nums) => {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (mid < r && nums[mid] > nums[mid + 1]) return mid;
    if (mid > l && nums[mid] < nums[mid - 1]) return mid - 1;
    if (nums[l] >= nums[mid]) r = mid - 1;
    if (nums[l] < nums[mid]) l = mid + 1;
  }
  return -1;
};

const bSearch = (arr, target) => {
  let l = 0, r = arr.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((r - l) / 2 + l);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) l = mid + 1;
    if (arr[mid] > target) r = mid - 1;
  }
  return -1;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const pivotIndex = findPivot(nums);
  if (pivotIndex === -1) return bSearch(nums, target);

  if (target <= nums[pivotIndex] && target >= nums[0]) {
    return bSearch(nums.slice(0, pivotIndex + 1), target);
  } else {
    const v = bSearch(nums.slice(pivotIndex + 1, nums.length), target);
    if (v === -1) return -1;
    else return v + pivotIndex + 1;
  }
};

console.log(search([3, 1], 3));
console.log(search([3, 5, 1], 5));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([6, 7, 1, 2, 3, 4, 5], 6));
