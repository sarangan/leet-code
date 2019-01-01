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

const isAsc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
};

var isValidBST = function(root) {
  const r = preorder(root);
  return isAsc(r);
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

console.log(n1);
console.log(isValidBST(n1));
