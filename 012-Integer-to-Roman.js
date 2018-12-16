/**
 Symbol       Value
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 */

/**
 * @param {number} num
 * @return {string}
 */
function repeat(times, char) {
  let res = '';
  for (let i = 0; i < times; i++) {
    res += char;
  }
  return res;
}

function getChar(digit) {
  switch (digit) {
    case 0:
      return ['I', 'V', 'X'];
    case 1:
      return ['X', 'L', 'C'];
    case 2:
      return ['C', 'D', 'M'];
    case 3:
      return ['M'];
    default:
      return [];
  }
}

function generateRoman(num, digit) {
  const [f, s, t] = getChar(digit);
  if (+num < 4) {
    return repeat(+num, f);
  } else if (+num < 5) {
    return repeat(5 - +num, f) + s;
  } else if (+num < 9) {
    return s + repeat(+num - 5, f);
  } else {
    return f + t;
  }
}

var intToRoman = function(num) {
  const narr = num.toString().split('');
  let result = [];
  for (let i = narr.length - 1; i >= 0; i--) {
    result.unshift(generateRoman(narr[i], narr.length - i - 1));
  }
  return result.join('');
};


console.log(intToRoman(3994));
