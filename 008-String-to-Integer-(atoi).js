/**
 * @param {string} str
 * @return {number}
 */


var myAtoi = function(str) {
  const regex = /^\s*([-|+]?[0-9]+)/;
  let m = regex.exec(str);
  if (m === null) return 0;

  // The result can be accessed through the `m`-variable.
  m.forEach((match, groupIndex) => {
    if (groupIndex === 1) str = match;
  });

  return Math.min(Math.max(+str, -(2 ** 31)), 2 ** 31 - 1);
};


console.log(myAtoi('+1'));
