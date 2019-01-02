const { BinaryTreeNode } = require('../../tools');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
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

console.log(searchBST(n1, 20));
