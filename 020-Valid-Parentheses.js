/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const obj = { '(': ')', '[': ']', '{': '}' };

  for (let e of s.split('')) {
    if (obj[e])
      stack.push(obj[e]);
    else {
      if (e !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};


console.log(isValid('())'));
