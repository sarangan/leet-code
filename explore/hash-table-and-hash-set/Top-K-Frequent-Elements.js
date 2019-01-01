/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const dict = {};
  for (const n of nums) {
    if (dict[n] === undefined) dict[n] = 0;
    dict[n]++;
  }

  return Object.keys(dict)
    .map(key => ({ key: key, val: dict[key] }))
    .sort((p, n) => p.val > n.val ? -1 : 1)
    .slice(0, k)
    .map(each => +each.key);
};

const nums = [1, 1, 1, 2, 2, 3], k = 2;
console.log(topKFrequent(nums, k));
