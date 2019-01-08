/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums = nums.sort((p, n) => p - n);
  const savedPos = [];

  const traverse = (nums, saved, result) => {
    if (saved.length === nums.length) {
      savedPos.push(result.concat());
      return;
    }

    for (let i = 0; i < nums.length;) {
      if (saved.includes(i)) {
        i++;
        continue;
      }
      saved.push(i);
      result.push(nums[i]);
      traverse(nums, saved, result);
      saved.pop();
      result.pop();

      const ti = i;
      while (nums[i] === nums[ti] && i < nums.length) i++;
    }
  };

  traverse(nums, [], []);
  return savedPos;
};


console.log(permuteUnique([3,3,0,3]));
