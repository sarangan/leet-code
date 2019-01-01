/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.vals = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  const flag = this.vals[val] === undefined;
  this.vals[val] = val;
  return flag;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const flag = this.vals[val] !== undefined;
  delete this.vals[val];
  return flag;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const index = Math.floor(Math.random() * Object.keys(this.vals).length);
  return this.vals[Object.keys(this.vals)[index]];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */



