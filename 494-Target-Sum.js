/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let count = 0;

  function helper (sum, lastIndex) {
    if (lastIndex === nums.length) {
      if (sum === S) count++;
      return;
    }
    helper(sum + nums[lastIndex], lastIndex + 1);
    helper(sum - nums[lastIndex], lastIndex + 1);
  }

  helper(0, 0);
  return count;
};

const data = [1, 1, 1, 1, 1], S = 3;
const r = findTargetSumWays(data, S);
console.log('------------');
console.log(r);