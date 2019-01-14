/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let last0, last1, last2;

  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        if (last0 === undefined) {
          last0 = 0;
          nums[0] = 0;
        } else {
          nums[++last0] = 0
        }
        if (last1 !== undefined) nums[++last1] = 1;
        if (last2 !== undefined) nums[++last2] = 2;
        break;
      case 1:
        if (last1 === undefined) {
          last1 = last0 !== undefined ? last0 + 1 : 0;
          nums[last1] = 1
        } else {
          nums[++last1] = 1
        }
        if (last2 !== undefined) nums[++last2] = 2;
        break;
      case 2:
        last2 = i;
        break;
    }
    console.log(nums, last0, last1, last2);
  }
};

const colors = [2,0,2,1,1,0];
console.log(colors);
sortColors(colors);
console.log(colors);