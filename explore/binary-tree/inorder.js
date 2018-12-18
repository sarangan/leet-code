const { BinaryTreeNode } = require('../../tools');

const n1 = new BinaryTreeNode(1);
const n2 = new BinaryTreeNode(2);
const n3 = new BinaryTreeNode(3);

n1.right = n2;
n2.left = n3;

var inorderTraversal = function(root) {
  const r = [];
  if (!root) return r;
  const traverse = node => {
    if (!node) return null;
    traverse(node.left);
    r.push(node.val);
    traverse(node.right);
    return r;
  };

  traverse(root);
  return r;
};

console.log(inorderTraversal(n1));