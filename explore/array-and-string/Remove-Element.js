/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let currentIndex = 0;
  for (const n of nums) {
    if (n !== val) nums[currentIndex++] = n;
  }
  return currentIndex;
};

const nums = [3,2,2,3], val = 3;
console.log(removeElement(nums, val));
