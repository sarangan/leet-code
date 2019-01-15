/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let si = 1;
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) count++;
    else count = 0;
    nums[si] = nums[i];
    if (count < 2) si++;
  }
  return si;
};


const nums = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(nums));
console.log(nums);