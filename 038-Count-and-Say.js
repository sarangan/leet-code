const say = str => {
  const result = [];
  let lastWord = str[0];
  let lastIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== lastWord) {
      result.push(i - lastIndex, lastWord);
      lastWord = str.charAt(i);
      lastIndex = i;
    }
  }
  result.push(str.length - lastIndex, lastWord);
  return result.join('');
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let last = '1';
  while (n > 1) {
    last = say(last);
    n--;
  }
  return last;
};


console.log(countAndSay(5));
