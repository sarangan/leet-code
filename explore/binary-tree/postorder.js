const { BinaryTreeNode } = require('../../tools');

const n1 = new BinaryTreeNode(1);
const n2 = new BinaryTreeNode(2);
const n3 = new BinaryTreeNode(3);

n1.right = n2;
n2.left = n3;

// recursive
var postorderTraversal = function(root) {
  const r = [];
  if (!root) return r;
  const traverse = node => {
    if (!node) return null;
    traverse(node.left);
    traverse(node.right);
    r.push(node.val);
    return r;
  };

  traverse(root);
  return r;
};

console.log(postorderTraversal(n1));