/**
 * @param {string} str
 * @return {string}
 */
var decodeString = function (str) {
  let res = '';
  let number = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      number += str[i];
    } else if (str[i] === '[') {
      const end = findFirstClosure(str, i);
      const result = decodeString(str.substring(i + 1, end));
      res += new Array(+number).fill(result).join('');
      number = '';
      i = end;
    } else if (str[i] === ']') {
    } else {
      res += str[i];
    }
  }
  return res;
};

function findFirstClosure (str, i) {
  let count = 0;
  while (i++) {
    if (str[i] === '[') count++;
    if (str[i] === ']') {
      if (count === 0) {
        return i;
      }
      count--;
    }
  }
}

const s = "3[a]2[bc]"; //, return "aaabcbc";
// const s = "3[a2[c]]"; //, return "accaccacc";
// const s = "2[abc]3[cd]ef"; //, return "abcabccdcdcdef";
// const s = "3[a]2[b4[F]c]"; //, return ""aaabFFFFcbFFFFc"";

const r = decodeString(s);
console.log('-----------');
console.log(r);