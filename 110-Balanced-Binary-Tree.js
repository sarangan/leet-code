const { deserialize } = require('./tools');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  let nonFullNodeCount = 0;

  let maxDepth = 0;
  const depthOfTree = (node, depth) => {
    if (!node) return depth - 1;
    if()
    maxDepth = Math.max(depth, maxDepth);
    if (node.left) depthOfTree(node.left, depth + 1);
    if (node.right) depthOfTree(node.right, depth + 1);
  };

  depthOfTree(root.left, 1);
  const dl = maxDepth;
  maxDepth = 0;
  depthOfTree(root.right, 1);
  const dr = maxDepth;

  console.log(dl, dr);
  return Math.abs(dl - dr) <= 1
};


const data1 = deserialize('[3,9,20,null,null,15,7]');
const data2 = deserialize('[1,2,2,3,3,null,null,4,4]');
const data3 = deserialize('[]');
const data4 = deserialize('[1]');
const data5 = deserialize('[1,2,2,3,null,null,3,4,null,null,4]');
console.log(isBalanced(data5));