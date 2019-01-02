const { BinaryTreeNode } = require('../../tools');

const preorder = (node) => {
  const result = [];

  const traverse = (node) => {
    if (!node) return;
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(node);
  return result;
};

var BSTIterator = function(root) {
  this.pre = preorder(root);
  this.currentIndex = 0;
  this.maxLength = this.pre.length;

};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.currentIndex++;
  return this.pre.shift();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.currentIndex < this.maxLength;
};


const n1 = new BinaryTreeNode(1);
const n2 = new BinaryTreeNode(9);
const n3 = new BinaryTreeNode(20);
const n4 = new BinaryTreeNode(15);
const n5 = new BinaryTreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;


const s = new BSTIterator(n1);
console.log(s.next());
console.log(s.hasNext());
