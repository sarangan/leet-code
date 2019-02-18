/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.topK = nums.sort((a, b) => b - a).slice(0, k + 1);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (val > this.topK[this.topK.length - 1] || this.topK.length < this.k) {
    let i;
    for (i = 0; i < this.k; i++) {
      if (val > this.topK[i]) break;
    }
    this.topK.splice(i, 0, val);
    if (this.topK.length > this.k) {
      this.topK.pop();
    }
  }
  return this.topK[this.k - 1];
};


const data = [0];
const e = new KthLargest(2, data);
console.log(e.add(-1));
console.log(e.add(1));
console.log(e.add(-2));
console.log(e.add(-4));
console.log(e.add(3));
