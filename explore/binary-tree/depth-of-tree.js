const { BinaryTreeNode } = require('../../tools');

const n1 = new BinaryTreeNode(1);
const n2 = new BinaryTreeNode(9);
const n3 = new BinaryTreeNode(20);
const n4 = new BinaryTreeNode(15);
const n5 = new BinaryTreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let maxDepth = 1;

  const recursive = (node, depth) => {
    if (node.left) recursive(node.left, depth + 1);
    if (node.right) recursive(node.right, depth + 1);
    maxDepth = Math.max(maxDepth, depth);
  };
  recursive(root, 1);

  return maxDepth;
};

console.log(maxDepth(n1));