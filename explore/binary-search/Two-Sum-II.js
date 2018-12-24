/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const dict = {};
  numbers.forEach((n, i) => {
    dict[n] = i;
  });

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (dict[target - n] !== undefined && dict[target - n] !== i) {
      return [i + 1, dict[target - n] + 1];
    }
  }
};


const numbers = [2, 7, 11, 15], target = 9;
console.log(twoSum(numbers, target));