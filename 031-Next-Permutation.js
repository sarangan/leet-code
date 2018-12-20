/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length === 0) return;

  let smallestIndex = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      smallestIndex = i - 1;
      break;
    }
  }
  if (smallestIndex === -1) {
    nums.sort((p, n) => p - n);
    return;
  }

  let diff = Number.MAX_VALUE, diffIndex = -1;
  for (let i = smallestIndex; i < nums.length; i++) {
    const tdiff = nums[i] - nums[smallestIndex];
    if (tdiff > 0 && tdiff < diff) {
      diff = tdiff;
      diffIndex = i;
    }
  }

  swap(nums, smallestIndex, diffIndex);
  for (let i = smallestIndex + 1; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) swap(nums, i, j);
    }
  }
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}


const n = [1, 2, 6, 4, 2];
console.log(n);
nextPermutation(n);
console.log(n);