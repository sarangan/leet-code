/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {};
  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }

  for (var i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [i, obj[target - nums[i]]]
    }
  }

  return null
};


console.log(twoSum([2, 7, 11, 15], 9));