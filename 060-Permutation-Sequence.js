// 60. Permutation Sequence
// The set [1,2,3,...,n] contains a total of n! unique permutations.
//
//   By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
//
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.
//
//   Note:
//
// Given n will be between 1 and 9 inclusive.
//   Given k will be between 1 and n! inclusive.
//   Example 1:
//
// Input: n = 3, k = 3
// Output: "213"
// Example 2:
//
// Input: n = 4, k = 9
// Output: "2314"

const getPermutation = (n, k) => {
  const arr = new Array(n).fill(0).map((e, i) => i + 1);
  let count = 0;
  let r;

  const traverse = (saved, rest) => {
    if (r) return;
    if (saved.length === arr.length) {
      count++;
      if (count === k) r = saved.concat().join('');
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      const clone = rest.concat();
      clone.splice(i, 1);
      traverse([...saved, rest[i]], clone);
    }
  };
  traverse([], arr);
  return r;
};


console.log(getPermutation(9, 233794));