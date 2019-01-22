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

var levelOrder = function(root) {
  if (!root) return [];
  const r = [[root]];

  let level = 0;
  while (r[level].length > 0) {
    r[level + 1] = [];
    for (const n of r[level]) {
      if (n.left) r[level + 1].push(n.left);
      if (n.right) r[level + 1].push(n.right);
    }
    level++;
  }
  return r.map(r => r.map(e => e.val)).filter(e => e.length > 0);
};


console.log(levelOrder(n1));