var arrayPairSum = function(nums) {
  nums.sort((p, n) => p > n ? 1 : -1);
  if (nums.length === 0) return 0;
  if (nums.length % 2 !== 0) nums.push(0);

  let result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += Math.min(nums[i], nums[i + 1])
  }
  return result;
};

console.log(arrayPairSum([1, 4, 3, 2]));