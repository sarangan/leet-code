/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (nums.length === 0) return -1;
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  let tsum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (tsum === (sum - nums[i]) / 2) return i;
    tsum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));