const { deserialize } = require('./tools');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;
  let lastnode = undefined;

  const traverse = (node) => {
    if (lastnode) {
      lastnode.next = node;
    }
    lastnode = node;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);

  while (root.next) {
    root.left = null;
    root.right = root.next;
    root.next = null;
    root = root.right;
  }
};


const data = deserialize('[1,2,5,3,4,null,6]');
flatten(data);
console.log(data);