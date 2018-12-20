const { LinkedBinaryTreeNode } = require('../../tools');

const n1 = new LinkedBinaryTreeNode(1);
const n2 = new LinkedBinaryTreeNode(2);
const n3 = new LinkedBinaryTreeNode(2);
const n4 = new LinkedBinaryTreeNode(3);
const n5 = new LinkedBinaryTreeNode(3);
const n6 = new LinkedBinaryTreeNode(4);
const n7 = new LinkedBinaryTreeNode(4);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n6;
n3.left = n7;
n3.right = n5;

function depthOfTree(root) {
  let maxDepth = 0;
  const traverse = (node, height) => {
    maxDepth = Math.max(maxDepth, height);
    if (node.left) traverse(node.left, height + 1);
    if (node.right) traverse(node.right, height + 1);
  };
  traverse(root, 0);
  return maxDepth + 1;
}

function dfsTraverse(root) {
  const stack = [root];

  let i = 0;
  while (stack[i]) {
    if (stack[i].left) stack.push(stack[i].left);
    if (stack[i].right) stack.push(stack[i].right);
    i++;
  }
  return stack;
}

var populatingNextRightPointersInEachNode = function(root) {
  if (!root) return;
  const height = depthOfTree(root);
  const dfs = dfsTraverse(root);

  for (let n = 1; n <= height; n++) {
    for (let j = 2 ** (n - 1); j <= 2 ** n - 1; j++) {
      if (j === 2 ** n - 1) {
        dfs[j - 1].next = null;
      } else {
        dfs[j - 1].next = dfs[j];
      }
    }
  }
};

populatingNextRightPointersInEachNode(n1);
console.log(n1.left.right);
