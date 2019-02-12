/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.size = k;
  this.head = -1;
  this.tail = -1;
  this.val = [];
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  if (this.head === -1) {
    this.head = this.tail = 0;
  } else {
    if (this.tail + 1 === this.size) {
      this.tail = 0;
    } else {
      this.tail++;
    }
  }
  this.val[this.tail] = value;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  // size
  if (this.head === this.tail) {
    this.head = this.tail = -1;
  } else {
    if (this.head + 1 === this.size) {
      this.head = 0;
    } else {
      this.head++;
    }
  }

  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.head !== -1
    ? this.val[this.head]
    : -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.tail !== -1
    ? this.val[this.tail]
    : -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === this.tail && this.head === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.tail === this.size - 1 && this.head === 0) || this.tail + 1 === this.head;
};

var obj = new MyCircularQueue(3);
console.log(obj.enQueue(1));
console.log(obj.enQueue(2));
console.log(obj.enQueue(3));
console.log(obj.enQueue(3));
console.log(obj.isEmpty());
console.log(obj.isFull());
console.log(obj.enQueue(3));
console.log(obj.Front());
console.log(obj.Rear());
console.log(obj.deQueue());
console.log(obj.Front());
console.log(obj.Rear());
console.log(obj.isEmpty());
console.log(obj.isFull());

console.log(obj);