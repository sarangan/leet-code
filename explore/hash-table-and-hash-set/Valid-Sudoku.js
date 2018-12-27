function isValidRow(arr) {
  console.log(arr);
  const obj = {};
  for (const n of arr) {
    if (obj[n] !== undefined && n !== '.') return false;
    obj[n] = n;
  }
  return true;
}

function blockPoints() {
  const arr = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      arr.push([i, j]);
    }
  }
  return arr;
}

function getBlock(board, index) {
  const ps = blockPoints();
  const [bi, bj] = ps[index];
  const result = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result.push(board[bi + i][bj + j]);
    }
  }
  return result;
}


var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    if (!isValidRow(board[i])
      || !isValidRow([board[0][i], board[1][i], board[2][i], board[3][i], board[4][i], board[5][i], board[6][i], board[7][i], board[8][i]])
      || !isValidRow(getBlock(board, i))) {
      return false;
    }
  }
  return true;
};

const board = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."]];
console.log(isValidSudoku(board));