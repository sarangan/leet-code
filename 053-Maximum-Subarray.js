// dont understand why

function maxSubArray (nums) {
  let sum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i]; // reset and start at current number
    } else {
      sum += nums[i];
    }

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -7, 4, 4]));