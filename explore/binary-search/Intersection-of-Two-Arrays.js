const bs = (nums, val) => {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === val) return true;
    if (nums[mid] < val) l = mid + 1;
    if (nums[mid] > val) r = mid - 1;
  }
  return false;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const sorted1 = nums1.sort((p, n) => p > n ? 1 : -1);
  const r = {};
  for (const e of nums2) {
    if (bs(sorted1, e)) r[e] = e;
  }
  return Object.values(r);
};

const nums1 = [2, 1], nums2 = [1, 1];
console.log(intersection(nums1, nums2));