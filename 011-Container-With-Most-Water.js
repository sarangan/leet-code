/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  let l = 0, r = height.length - 1;

  while (l < r) {
    maxArea = Math.max(maxArea, (r - l) * Math.min(height[l], height[r]));
    (height[l] < height[r]) ? l++ : r--;
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

