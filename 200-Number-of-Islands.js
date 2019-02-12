var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  let count = 0;
  let map = {};
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !map[`${i}-${j}`]) {
        map[`${i}-${j}`] = true;
        dfs(i, j, m, n, map, grid);
        count++;
      }
    }
  }

  return count;
};


function dfs (i, j, m, n, map, grid) {
  if (i < 0 || i >= m || j < 0 || j >= n) return;
  if (grid[i][j] === '0') return;

  map[`${i}-${j}`] = true;
  [
    [i - 1, j],
    [i + 1, j],
    [i, j - 1],
    [i, j + 1]
  ]
    .filter(([i, j]) => !map[`${i}-${j}`])
    .forEach(([i, j]) => dfs(i, j, m, n, map, grid));
}


const data = [
  ["0", "1", "0", "0", "1"],
  ["1", "0", "0", "0", "0"],
  ["1", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

console.log(numIslands(data));