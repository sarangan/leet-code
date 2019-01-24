/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] = triangle[i][j] + triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] = triangle[i][j] + triangle[i - 1][j - 1];
      } else {
        triangle[i][j] = Math.min(triangle[i][j] + triangle[i - 1][j], triangle[i][j] + triangle[i - 1][j - 1]);
      }
    }
  }
  return Math.min(...triangle[triangle.length - 1])
};

const data = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
];
console.log(minimumTotal(data));

console.log(data);