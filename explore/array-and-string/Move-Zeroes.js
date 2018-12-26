/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let ci = 0, zcount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[ci++] = nums[i];
    } else {
      zcount++;
    }
  }
  for (let i = zcount; i > 0; i--) {
    nums[nums.length - i] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);