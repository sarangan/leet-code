const findPivot = (arr) => {
  let l = 0, r = arr.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid - 1] > arr[mid]) return mid - 1;
    if (arr[l] < arr[mid]) l = mid + 1;
    if (arr[r] > arr[mid]) r = mid - 1;
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const pivot = findPivot(nums);
  if (pivot === -1) return nums[0];
  else return nums[pivot + 1];
};

console.log(findMin([3, 0]));