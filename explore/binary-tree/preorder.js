const { BinaryTreeNode } = require('../../tools');

const n1 = new BinaryTreeNode(1);
const n2 = new BinaryTreeNode(2);
const n3 = new BinaryTreeNode(3);

n1.right = n2;
n2.left = n3;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const r = [];

  const traverse = node => {
    if (!node) return null;
    r.push(node.val);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
    return r;
  };
  traverse(root);
  return r;
};


// iterative
var preorderTraversal = function(root) {
  if (!root) return [];

  const stack = [root];
  const r = [];

  let i = 0;
  while (stack[i]) {
    r.push(stack[i].val);
    if (stack[i].left) stack.push(stack[i].left);
    if (stack[i].right) stack.push(stack[i].right);
    i++;
  }

  return r;
};

console.log(preorderTraversal(n1));