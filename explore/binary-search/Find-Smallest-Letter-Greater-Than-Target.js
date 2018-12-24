const bfind = (letters, target) => {
  let l = 0, r = letters.length;
  let mid;
  while (l < r) {
    console.log(l, r);
    mid = l + Math.floor((r - l) / 2);
    if (letters[mid] === target) {
      if (mid + 1 === letters.length) return 0;
      if (letters[mid + 1] > target) return mid + 1;
      l = mid + 1
    }
    if (letters[mid] < target) l = mid + 1;
    if (letters[mid] > target) r = mid;
  }
  if(r === letters.length) return 0;
  return r;
};

var nextGreatestLetter = function(letters, target) {
  const r = bfind(letters, target);
  return letters[r];
};

const letters = ["c", "c", "c", "f", "j", 'j', 'j'];
const target = "z";
console.log(nextGreatestLetter(letters, target));