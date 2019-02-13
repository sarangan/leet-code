/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.val = [];
  this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.val.push(x);
  if (this.min.length === 0) {
    this.min.push(x);
  } else {
    this.min.push(Math.min(this.min[this.min.length - 1], x));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.val.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.val[this.val.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


const minStack = new MinStack();

minStack.push(1);
minStack.push(2);
minStack.push(3);
minStack.push(4);
minStack.push(5);
minStack.push(6);
minStack.push(0);
minStack.push(6);

console.log(minStack);
console.log(minStack.top());
console.log(minStack.getMin());

minStack.pop();
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
