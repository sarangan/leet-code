/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  return str
    .replace(/\r\n|\r|\n/g, ',')
    .replace(/\s+/g, '|')
    .split('|')
    .reverse()
    .filter(e => e!== '').join(' ');
};

const input = `a
  yqo! qjktum ym. .fumuhau`;
console.log(reverseWords(input));

