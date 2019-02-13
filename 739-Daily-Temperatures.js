/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const res = new Array(T.length).fill(0);
  const stack = [];

  for (let i = 0; i < T.length; i++) {
    while (stack.length !== 0 && T[i] > T[stack[stack.length - 1]]) {
      const j = stack.pop();
      res[j] = i - j;
    }
    stack.push(i);
  }
  return res;
};


const data = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(data));