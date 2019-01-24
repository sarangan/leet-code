/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxprofit = 0;
  let minval = Number.MAX_VALUE;

  for (const n of prices) {
    if (n < minval) {
      minval = n;
    } else if (n - minval > maxprofit) {
      maxprofit = n - minval;
    }
  }

  return maxprofit;
};

const data = [7, 1, 5, 3, 9, 4];
console.log(maxProfit(data));