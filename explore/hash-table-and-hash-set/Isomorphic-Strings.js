function sameAs(s, rules) {
  for (const rule of rules) {
    const temp = s[rule[0]];
    for (const i of rule) {
      if (s[i] !== temp) return false
    }
  }
  return true;
}

function notSameAs(s, rules) {
  const notSameRule = rules.map(rule => rule[0]);
  const obj = {};

  for (const i of notSameRule) {
    obj[s[i]] = 1;
  }

  return Object.keys(obj).length === notSameRule.length;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  if (s === '' && t === '') return true;
  const dict = {};
  s.split('').forEach((e, i) => {
    if (dict[e] === undefined) dict[e] = [];
    dict[e].push(i);
  });

  console.log(dict);

  return sameAs(t, Object.values(dict)) && notSameAs(t, Object.values(dict));
};

const s = "paper", t = "title";
console.log(isIsomorphic(s, t));