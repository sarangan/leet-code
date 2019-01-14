// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//   Integers in each row are sorted from left to right.
//   The first integer of each row is greater than the last integer of the previous row.
//   Example 1:
//
// Input:
//   matrix = [
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ]
// target = 3
// Output: true
// Example 2:
//
// Input:
//   matrix = [
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ]
// target = 13
// Output: false
const bs = (nums, target) => {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] < target) l = mid + 1;
    if (nums[mid] > target) r = mid - 1;
  }
  return false;
};


function searchMatrix (matrix, target) {
  if (matrix.length === 0) return false;
  const m = matrix.length;
  const n = matrix[0].length;

  let targetRow;
  for (let i = 0; i < m - 1; i++) {
    if (target === matrix[i][0]) return true;
    if (target === matrix[i + 1][0]) return true;
    if (target > matrix[i][0] && target < matrix[i + 1][0]) targetRow = i;
  }
  if (targetRow === undefined) targetRow = m - 1;

  if (matrix[targetRow][n - 1] < target) return false;
  return bs(matrix[targetRow], target);
}

const matrix = [
  [1],
  [3],
];

console.log(searchMatrix(matrix, 1));
