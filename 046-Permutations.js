/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const savedPos = [];

  const traverse = (nums, saved, result) => {
    if (saved.length === nums.length) {
      savedPos.push(result.concat());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (saved.includes(i)) continue;
      saved.push(i);
      result.push(nums[i]);
      traverse(nums, saved, result);
      saved.pop();
      result.pop();
    }
  };

  traverse(nums, [], []);
  return savedPos;
};


console.log(permute([1, 2]));
