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

function findCommonAncestor(a1, a2) {
  const obj = a2.reduce((p, n) => {
    p[n.val] = n.val;
    return p;
  }, {});
  for (let i = a1.length - 1; i >= 0; i--) {
    const n = a1[i];
    if (obj[n.val] !== undefined) return n;
  }
}

var lowestCommonAncestor = function(root, p, q) {
  const stack = [{ n: root, ancestors: [root] }];
  let ans1;
  let i = 0;

  while (stack[i]) {
    if (stack[i].n.val === p.val || stack[i].n.val === q.val) {
      if (ans1) {
        return findCommonAncestor(ans1.ancestors, stack[i].ancestors);
      }
      ans1 = stack[i];
    }
    if (stack[i].n.left) stack.push({ n: stack[i].n.left, ancestors: [...stack[i].ancestors, stack[i].n.left] });
    if (stack[i].n.right) stack.push({ n: stack[i].n.right, ancestors: [...stack[i].ancestors, stack[i].n.right] });
    i++;
  }
};

console.log(lowestCommonAncestor(n1, new TreeNode(1), new TreeNode(5)));
