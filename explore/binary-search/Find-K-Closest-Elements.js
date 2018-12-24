const findFirstX = (arr, x) => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === x ? 0 : -1;

  let l = 0, r = arr.length - 1;
  while (l + 1 < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) return mid;
    if (arr[mid] < x) l = mid;
    if (arr[mid] > x) r = mid;
  }
  return l;
};

const expend = (arr, index, k, x) => {
  let l = index, r = index + 1;
  while (k > 0) {
    if (l === -1) {
      r += k;
      break
    }
    if (r === arr.length) {
      l -= k;
      break;
    }
    const diffl = Math.abs(arr[l] - x);
    const diffr = Math.abs(arr[r] - x);
    if (diffl <= diffr) {
      l--;
      k--
    }
    if (diffl > diffr) {
      r++;
      k--
    }
  }
  return [l + 1, r - 1];
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  if (arr.length === 0) return [];
  if (k >= arr.length) return arr;

  // check target Index
  // adjust range by k and array length and targetIndex
  // if length is smaller than k return all
  // if index - 0 smaller than k return [0 - k]
  // return [targetIndex - k,  targetIndex]
  let targetIndex;
  if (x > arr[arr.length - 1]) targetIndex = arr.length - 1;
  else if (x < arr[0]) targetIndex = 0;
  else targetIndex = findFirstX(arr, x);
  const [start, end] = expend(arr, targetIndex, k, x);
  return arr.slice(start, end + 1);
};

// console.log(findFirstX([1, 2, 3, 4, 5, 7, 9, 10], 6));
console.log(findClosestElements([1, 2, 3, 4, 5, 7, 9, 10], 4, 11));
// console.log(findClosestElements([1], 4, 4));