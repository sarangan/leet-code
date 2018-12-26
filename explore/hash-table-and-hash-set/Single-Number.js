/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const obj = {};
  for (const n of nums) {
    if (obj[n]) obj[n]++;
    else obj[n] = 1;
  }
  for (const key of Object.keys(obj)) {
    if (obj[key] === 1) return +key;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));