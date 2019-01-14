/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const results = [];
  const traverse = (state, lastIndex) => {
    results.push(state);

    for (let i = lastIndex; i < nums.length; i++) {
      traverse([...state, nums[i]], i + 1);
    }
  };

  traverse([], 0);
  return results;
};

console.log(subsets([1, 2, 3]));