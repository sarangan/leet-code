Array.prototype.equal = function(comparor) {
  if (this.length !== comparor.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== comparor[i]) return false;
  }
  return true;
};

function fillDict(s, dict) {
  s.split('').forEach((e, i) => {
    if (dict['_' + e] === undefined) dict['_' + e] = [];
    dict['_' + e].push(i);
  });
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  if (s === '' && t === '') return true;
  const dict1 = {}, dict2 = {};

  fillDict(s, dict1);
  fillDict(t, dict2);

  const v1 = Object.values(dict1);
  const v2 = Object.values(dict2);

  if (v1.length !== v2.length) return false;
  for (let i = 0; i < v1.length; i++) {
    if (!v1[i].equal(v2[i])) return false;
  }
  return true;
};

const s = "13", t = "42";
console.log(isIsomorphic(s, t));