function toDict(arr) {
  const obj = {};
  for (const n of arr) {
    if (obj[n] === undefined) obj[n] = 0;
    obj[n]++;
  }
  return obj;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const [longer, shorter] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
  const dict = toDict(longer);
  const result = [];
  for (const n of shorter) {
    if (dict[n]) {
      result.push(n);
      dict[n]--;
    }
  }
  return result;
};


const nums1 = [1, 1], nums2 = [3, 1, 2];
console.log(intersect(nums1, nums2));