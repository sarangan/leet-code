/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const t = [[1], [1, 1]];
  if (rowIndex <= 1) return t[rowIndex];

  for (let i = 1; i < rowIndex; i++) {
    const r = [];
    for (let j = 0; j < t[i].length - 1; j++) {
      r.push(t[i][j] + t[i][j + 1]);
    }
    t.push([1, ...r, 1]);
  }
  return t[t.length - 1];
};

console.log(getRow(3));