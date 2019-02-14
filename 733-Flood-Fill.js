/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const compareValue = image[sr][sc];
  const m = image.length;
  const n = image[0].length;
  const memo = {};

  function dfs (i, j) {
    if (image[i][j] === compareValue) {
      image[i][j] = newColor;
      memo[`${i}-${j}`] = true;

      [
        [i + 1, j],
        [i - 1, j],
        [i, j + 1],
        [i, j - 1]
      ]
        .filter(([i, j]) =>
          i >= 0 && i < m && j >= 0 && j < n
          && image[i][j] === compareValue
          && !memo[`${i}-${j}`])
        .forEach(([i, j]) => dfs(i, j));
    }
  }

  dfs(sr, sc);
  return image;
};


const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
], sr       = 1, sc = 1, newColor = 2;
// [
// [2,2,2],
// [2,2,0],
// [2,0,1]
// ]

console.log(floodFill(image, sr, sc, newColor));