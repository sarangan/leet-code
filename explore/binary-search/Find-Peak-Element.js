/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let l = 0, r = nums.length - 1;
  if (nums[l] > nums[l + 1]) return 0;
  if (nums[r] > nums[r - 1]) return r;

  const find = (l, r) => {
    if (l > r) return null;
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
    return find(l, mid - 1) || find(mid + 1, r);
  };

  return find(l, r);
};

// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
// console.log(findPeakElement([1, 2, 3, 1]));
// console.log(findPeakElement([1, 2]));
console.log(findPeakElement([3, 4, 3, 2, 1]));