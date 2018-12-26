/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let currentIndex = 0;

  // use equal for the last one
  for (let i = 0; i <= nums.length; i++) {
    if (nums[currentIndex] !== nums[i]) {
      nums[++currentIndex] = nums[i];
    }
  }
  return currentIndex;
};

const t = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(t));
console.log(t);