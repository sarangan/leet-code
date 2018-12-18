const { TreeNode } = require('../../tools');

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);

n1.children = [n3, n2, n4];
n3.children = [n5, n6];

let r = [];

function postorder(node) {
  r.push([node]);
  let level = 0;
  while (r[level].length !== 0) {
    r[level + 1] = [];
    for (const n of r[level]) {
      for (const c of n.children) {
        r[level + 1].push(c);
      }
    }
    level++;
  }

  return r
    .map(row => row.map(n => n.val))
    .filter(e => e.length > 0);
}

console.log(postorder(n1));