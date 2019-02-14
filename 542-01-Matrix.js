/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  if(matrix.length === 0) return [];
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1)
        matrix[i][j] = bfs(i, j);
    }
  }

  function bfs (i, j) {
    const queue = [[i, j]];
    const memo = {};
    let depth = 0;

    while (queue.length > 0) {
      depth++;
      const len = queue.length;
      for (let x = 0; x < len; x++) {
        const [i, j] = queue.shift();
        memo[`${i}-${j}`] = true;
        const avaiableNeighbours = [
          [i + 1, j],
          [i - 1, j],
          [i, j + 1],
          [i, j - 1],
        ]
          .filter(([i, j]) => i >= 0 && i < m && j >= 0 && j < n && !memo[`${i}-${j}`]);

        for (const address of avaiableNeighbours) {
          const [i, j] = address;
          console.log(matrix[i][j]);
          if (matrix[i][j] === 0) return depth;
          memo[`${i}-${j}`] = true;
          queue.push([i, j]);
        }
      }
    }
    return -1;
  }

  return matrix;
};


const data = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 1, 1],
];

console.log(updateMatrix(data));