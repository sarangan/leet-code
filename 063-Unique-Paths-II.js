/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if(obstacleGrid[0][0] === 1) return 0;
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
  let iMark = false, jMark = false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (obstacleGrid[i][j] === 1) iMark = true;
        obstacleGrid[i][j] = iMark ? 0 : 1;
      } else if (j === 0) {
        if (obstacleGrid[i][j] === 1) jMark = true;
        obstacleGrid[i][j] = jMark ? 0 : 1;
      } else {
        obstacleGrid[i][j] = obstacleGrid[i][j] !== 1
          ? obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
          : 0;
      }
    }
  }
  return obstacleGrid[m - 1][n - 1];
};


const input = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 0, 0]
];

console.log(uniquePathsWithObstacles(input));