const findNeighbour = (addresses, dict, size) => {
  const result = [];
  const { m, n } = size;
  for (const address of addresses) {
    if (dict[`${address.i}${address.j}`]) continue;

    const { i, j } = address;
    if (i !== 0) result.push({ i: i - 1, j });
    if (i !== m - 1) result.push({ i: i + 1, j });
    if (j !== 0) result.push({ i, j: j - 1 });
    if (j !== n - 1) result.push({ i, j: j + 1 });
  }
  return result;
};


var exist = function (board, word) {
  if (!board || board.length === 0 || !word || word.length === 0) return false;
  const dict = {};
  const size = { m: board.length, n: board[0].length };

  // find target
  const targets = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) targets.push({ i, j });
    }
  }
  // console.log(targets);
  if (targets.length === 0) return false;
  // find Neighbours
  let neighbours = findNeighbour(targets, dict, size);
  targets.forEach(r => dict[`${r.i}${r.j}`] = true);
  // console.log('1', dict, neighbours);

  // check if neighbour match the rule
  for (let i = 1; i < word.length; i++) {
    // filter all match neighbour and spread.
    const newTarget = neighbours.filter(e => board[e.i][e.j] === word[i]);
    // console.log(newTarget);
    if (newTarget.length === 0) return false;
    neighbours = findNeighbour(newTarget, dict, size);
    newTarget.forEach(r => dict[`${r.i}${r.j}`] = true);
    // console.log('2', dict, neighbours);
  }
  // end until last word
  // console.log(neighbours);
  return true;
};


const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];


console.log(exist(board, "SEEC"));