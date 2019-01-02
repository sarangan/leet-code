const { TreeNode } = require('../../tools');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const isLeaf = node => {
  return node.left === null && node.right === null;
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) return null;

  const findNode = (root) => {
    if (isLeaf(root)) return root;

    if (val < root.val) {
      if (!root.left) return root;
      return findNode(root.left);
    } else {
      if (!root.right) return root;
      return findNode(root.right);
    }
  };

  const target = findNode(root);
  console.log(target.val);

  if(val < target.val){
    target.left = new TreeNode(val);
  }else{
    target.right = new TreeNode(val);
  }
  return root;
};


