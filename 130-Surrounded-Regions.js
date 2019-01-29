/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0) return;
  const exceptions = {};

  const osAtEdge = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === 'O') osAtEdge.push([i, 0]); // left
    if (board[i][board[0].length - 1] === 'O') osAtEdge.push([i, board[0].length - 1]); // right
  }

  for (let j = 0; j < board[0].length; j++) {
    if (board[0][j] === 'O') osAtEdge.push([0, j]); // top
    if (board[board.length - 1][j] === 'O') osAtEdge.push([board.length - 1, j]); // bottom
  }

  const neighbour = (c, memo) => {
    const [i, j] = c;
    memo[`${i}-${j}`] = true;
    exceptions[`${i}-${j}`] = true;
    [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]
      .filter(c => {
        const [i, j] = c;
        return !memo[`${i}-${j}`]
          && i < board.length && i >= 0 && j < board[0].length && j >= 0
          && board[i][j] === 'O';
      })
      .forEach(c => {
        const [i, j] = c;
        exceptions[`${i}-${j}`] = true;
        return neighbour(c, memo);
      });
  };

  for (const c of osAtEdge) {
    neighbour(c, {});
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (!exceptions[`${i}-${j}`] && board[i][j] === 'O') board[i][j] = 'X';
    }
  }
};


const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"]
];

solve(board);
console.log(board);

