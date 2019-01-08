// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
//   A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//   Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (letterCombinations) {
  if(letterCombinations.length === 0) return [];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const results = [];

  const t = (r, i) => {
    if (letterCombinations[i] === undefined) {
      results.push(r);
      return;
    }

    for (const n of map[letterCombinations[i]]) {
      t(r + n, i + 1);
    }
  };
  t('', 0);
  return results;
};

console.log(letterCombinations(''));