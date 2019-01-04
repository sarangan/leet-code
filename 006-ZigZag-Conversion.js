/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  // init ojb
  const obj = [];
  for (let i = 0; i < numRows; i++) {
    obj.push([]);
  }

  let c = 0, d = 'h';
  for (let i = 0; i < s.length; i++) {
    obj[c].push(s.charAt(i));
    if (d === 'h') c++;
    if (d === 'v') c--;

    if (c === numRows - 1) d = 'v';
    if (c === 0) d = 'h';
  }

  let r = [];
  for (let i = 0; i < Object.values(obj).length; i++) {
    r.push(obj[i].join(''))
  }
  return r.join('');
  // return Object.values(obj).reduce((p, n) => [...p, ...n]).join('');
};


const s = "PAYPALISHIRING", numRows = 4;
console.log(convert(s, numRows));