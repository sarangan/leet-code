// 39. Combination Sum
// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//   The same repeated number may be chosen from candidates unlimited number of times.
//   Note:
//
// All numbers (including target) will be positive integers.
//   The solution set must not contain duplicate combinations.
//   Example 1:
//
// Input: candidates = [2,3,6,7], target = 7,
//   A solution set is:
//   [
//     [7],
//     [2,2,3]
//   ]
// Example 2:
//
// Input: candidates = [2,3,5], target = 8,
//   A solution set is:
//   [
//     [2,2,2,2],
//     [2,3,3],
//     [3,5]
//   ]
var combinationSum = function (candidates, target) {
  const results = [];
  const stack = [];
  let searchIndex = 0;

  const r = (target, lastIndex) => {
    // console.log(stack, target, lastIndex);
    if (target === 0) {
      // console.log('!!!!', stack);
      results.push(stack.concat());
      return;
    }

    for (let i = Math.max(searchIndex, lastIndex); i < candidates.length; i++) {
      if (stack.length === 0) searchIndex = i;
      const n = candidates[i];
      if (target - n >= 0) {
        stack.push(n);
        r(target - n, i);
        stack.pop();
      }
    }
  };

  r(target, 0);
  return results;
};

const candidates = [2, 3, 6, 7], target = 7;
console.log(conbinationSum(candidates, target));