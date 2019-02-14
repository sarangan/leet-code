/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (!s) return -1;
  if (s.length === 0) return -1;

  const obj = {};
  s.split('').forEach((e, i) => {
    if (obj[e] === undefined) obj[e] = [];
    obj[e].push(i);
  });

  const l1 = Object.values(obj).filter(e => e.length === 1);
  if(l1.length ===0) return -1;
  return l1.reduce((p, n) => p[0] > n[0] ? n : p)[0];
};

