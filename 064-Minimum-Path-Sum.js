function minPathSum (grid) {
  const [m, n] = [grid.length, grid[0].length];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) grid[i][j] = grid[i][j];
      else if (i === 0) grid[i][j] = grid[i][j - 1] + grid[i][j];
      else if (j === 0) grid[i][j] = grid[i - 1][j] + grid[i][j];
      else grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }
  return grid[m - 1][n - 1];
}

const data = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

console.log(minPathSum(data));