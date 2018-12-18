const { BinaryTreeNode } = require('../../tools');

const n1 = new BinaryTreeNode(1);
const n2 = new BinaryTreeNode(2);
const n3 = new BinaryTreeNode(2);
const n4 = new BinaryTreeNode(3);
const n5 = new BinaryTreeNode(3);
const n6 = new BinaryTreeNode(4);
const n7 = new BinaryTreeNode(4);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n6;
n3.left = n7;
n3.right = n5;

var preorderTraversal = function(root, direction) {
  const r = [];

  const traverse = node => {
    if (!node) {
      r.push(null);
      return null;
    }
    r.push(node.val);
    if (direction === 'l2r') {
      traverse(node.left);
      traverse(node.right);
    } else {
      traverse(node.right);
      traverse(node.left);
    }
    return r;
  };

  traverse(root);
  return r;
};

const arrayEqual = (a1, a2) => {
  if (a1.length !== a2.length) return false;

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

var isSymmetric = function(root) {
  if(!root) return true;
  const l = preorderTraversal(root.left, 'l2r');
  const r = preorderTraversal(root.right, 'r2l');

  return arrayEqual(l, r);
};

console.log(n1);
console.log(isSymmetric(n1));