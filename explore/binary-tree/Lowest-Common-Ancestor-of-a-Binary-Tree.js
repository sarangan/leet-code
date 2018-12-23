const { TreeNode } = require('../../tools');

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);
const n7 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n6;
n3.left = n7;
n3.right = n5;

function pop(arr) {
  const last = arr.pop();
  if (last.flag) {
    if (!arr[arr.length - 1]) return null;
    if (arr[arr.length - 1].flag) return arr[arr.length - 1];
    arr[arr.length - 1].flag = true;
  }
  return null;
}

var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  let r = null;
  const stack = [];

  const traverse = (node) => {
    if (r !== null) return;
    stack.push(node);
    if (node.val === p.val || node.val === q.val) {
      stack[stack.length - 1].flag = true;
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    let t = pop(stack);
    if (t) r = t;
  };
  traverse(root);
  return r;
};

console.log(lowestCommonAncestor(n1, new TreeNode(6), new TreeNode(5)));
