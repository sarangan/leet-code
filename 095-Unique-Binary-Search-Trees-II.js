const { TreeNode } = require('./tools');

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  return helper(1, n);
};

function helper (l, r) {
  if (l === r) return [new TreeNode(l)];
  if (l > r) return [null];
  const results = [];
  let index = l;
  while (index <= r) {
    const leftTree = helper(l, index - 1);
    const rightTree = helper(index + 1, r);

    for (const leftnode of leftTree) {
      for (const rightnode of rightTree) {
        const node = new TreeNode(index);
        node.left = leftnode;
        node.right = rightnode;
        results.push(node);
      }
    }
    index++;
  }
  return results;
}

console.log(generateTrees(0));