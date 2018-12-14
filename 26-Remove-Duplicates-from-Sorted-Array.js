/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const obj = {};
  let arrLength = nums.length;
  let i = 0;
  while (i < arrLength) {
    if (obj[nums[i]] !== undefined) {
      nums.splice(i, 1);
      arrLength--;
      continue;
    }

    obj[nums[i]] = nums[i];
    i++;
  }
};


const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
console.log(nums);
