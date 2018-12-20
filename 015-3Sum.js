function isSame(a1, a2) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false
  }
  return true;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const obj = nums.reduce((p, n, i) => {
    p[n] = i;
    return p;
  }, {});
  console.log(obj);
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (obj[-(nums[i] + nums[j])] !== undefined && i !== j && j !== obj[-(nums[i] + nums[j])] && i !== obj[-(nums[i] + nums[j])])
        results.push([-(nums[i] + nums[j]), nums[i], nums[j]]);
    }
  }
  const shakedResults = [];
  results
    .map(result => result.sort())
    .forEach(each => {
      let exist = false;
      for (const e of shakedResults) {
        if (isSame(e, each)) exist = true;
      }
      if (!exist) shakedResults.push(each);
    });

  return shakedResults;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]));