/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = nums.reduce((p, n, i) => {
    p[n] = i;
    return p;
  }, {});
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] !== undefined && obj[target - nums[i]] !== i)
      return [i, obj[target - nums[i]]];
  }
  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));