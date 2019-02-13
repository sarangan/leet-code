/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  for (let i = 0; i < T.length; i++) {
    let j;
    for (j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        T[i] = j - i;
        break;
      }
    }
    if (j === T.length) T[i] = 0;
  }
  return T;
};


const data = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(data));