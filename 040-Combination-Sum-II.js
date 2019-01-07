// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//
//   Each number in candidates may only be used once in the combination.
//
//   Note:
//
// All numbers (including target) will be positive integers.
//   The solution set must not contain duplicate combinations.
//   Example 1:
//
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
//   A solution set is:
//   [
//     [1, 7],
//     [1, 2, 5],
//     [2, 6],
//     [1, 1, 6]
//   ]
// Example 2:
//
// Input: candidates = [2,5,2,1,2], target = 5,
//   A solution set is:
//   [
//     [1,2,2],
//     [5]
//   ]

var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((p, n) => p - n);
  const results = [];
  const stack = [];

  const r = (target, lastIndex) => {
    // console.log(stack, target, lastIndex);
    if (target === 0) {
      // console.log('!!!!', stack);
      results.push(stack.concat());
      return;
    }

    for (let i = lastIndex; i < candidates.length;) {
      const n = candidates[i];
      if (target - n >= 0) {
        stack.push(n);
        r(target - n, i + 1);
        stack.pop();
      }
      const c = candidates[i];
      while (candidates[i] === c && i < candidates.length) i++;
    }
  };

  r(target, 0);
  return results;
};

const candidates = [10, 1, 2, 7, 6, 1, 5], target = 8;
console.log(combinationSum2(candidates, target));