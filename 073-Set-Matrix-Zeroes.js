/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (Object.is(matrix[i][j], 0)) {
        // m + n
        for (let i1 = 0; i1 < m; i1++) {
          matrix[i1][j] = matrix[i1][j] && -0;
        }
        for (let j1 = 0; j1 < n; j1++) {
          matrix[i][j1] = matrix[i][j1] && -0;
        }
      }
    }
  }
};


const s = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];

setZeroes(s);
console.log(s);