/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const obj = J.split('').reduce((p, n) => {
    p[n] = n;
    return p;
  }, {});

  let count = 0;
  for (const n of S.split('')) {
    if (obj[n] !== undefined) count++
  }
  return count;
};

const J = "aA", S = "aAAbbbb";

console.log(numJewelsInStones(J, S));