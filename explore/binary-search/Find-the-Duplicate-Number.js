/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const n = nums.concat().sort((p, n) => p > n ? 1 : -1);
  let l = 0, r = nums.length - 1;

  const bfind = (l, r) => {
    if (l >= r) return null;
    let mid = l + Math.floor((r - l) / 2);
    if (n[mid] === n[mid - 1]) return n[mid - 1];
    if (n[mid] === n[mid + 1]) return n[mid];
    const rl = bfind(l, mid - 1);
    const rr = bfind(mid + 1, r);
    return rl === null ? rr : rl
  };

  return bfind(l, r);
};

const t = [5, 1, 2, 0, 0];
console.log(findDuplicate(t));
console.log(t);