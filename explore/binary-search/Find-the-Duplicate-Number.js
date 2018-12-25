/**
 * Time O(nlogn) Space O(n)
 */
// var findDuplicate = function(nums) {
//   const n = nums.concat().sort((p, n) => p > n ? 1 : -1);
//   let l = 0, r = nums.length - 1;
//
//   const bfind = (l, r) => {
//     if (l >= r) return null;
//     let mid = l + Math.floor((r - l) / 2);
//     if (n[mid] === n[mid - 1]) return n[mid - 1];
//     if (n[mid] === n[mid + 1]) return n[mid];
//     const rl = bfind(l, mid - 1);
//     const rr = bfind(mid + 1, r);
//     return rl === null ? rr : rl
//   };
//
//   return bfind(l, r);
// };

/**
 * Time O(nlogn) Space O(logn)
 */
var findDuplicate = function(nums) {
  let l = 0, r = nums.length;
  let mid;
  while (l < r) {
    mid = l + Math.floor((r - l) / 2);
    let count = 0;
    for (const n of nums) if (n <= mid) count++;
    if (count <= mid) l = mid + 1;
    else r = mid;
  }
  return l;
};

const t = [4, 5, 2, 6, 1, 3, 2];
console.log(findDuplicate(t));
console.log(t);