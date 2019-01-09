const rotatePosition = (i, j, boundary) => {
  if (i === j && boundary % 2 === 0 && i === boundary / 2) return [i, j];
  return [j, boundary - i];
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const size = matrix.length;
  if (size === 1) return;

  const newMatrix = new Array(size).fill(size).map(() => new Array(size).fill(0));
  // make new matrix
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const [newi, newj] = rotatePosition(i, j, size - 1);
      // console.log(i, j, '=>', newi, newj);
      newMatrix[newi][newj] = matrix[i][j];
    }
  }

  // copy to old matrix
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      matrix[i][j] = newMatrix[i][j];
    }
  }
};

const matrix = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];

console.log(matrix);
rotate(matrix);
console.log(matrix);