/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  //console.log(nums);
  const results = [];
  const dict = {};
  const stack = [];
  const traverse = (lastIndex) => {
    for (let i = lastIndex; i < nums.length; i++) {
      stack.push(nums[lastIndex]);
      const snapshot = stack.concat();
      if (!dict[snapshot.sort((p, n) => p - n).join('-')]) {
        dict[snapshot.join('-')] = true;
        results.push(snapshot);
      }
      //console.log('before ', stack, lastIndex);
      traverse(++lastIndex);
      //console.log('after', stack, lastIndex);
      stack.pop();
    }
  };
  traverse(0);
  results.unshift([]);
  return results;
  // console.log(stack);
};


const nums = [1, 2, 2];
console.log(subsetsWithDup(nums));
