const { TreeNode } = require('../../tools');

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);

n1.children = [n3, n2, n4];
n3.children = [n5, n6];

const r = [];

function preorder(node) {
  r.push(node);
  for (const c of node.children) {
    preorder(c);
  }
  return r;
}

console.log(preorder(n1));