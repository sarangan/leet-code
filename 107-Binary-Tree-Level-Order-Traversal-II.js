const { deserialize } = require('./tools');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const result = [[root]];

  while (result[result.length - 1].length > 0) {
    result.push([]);
    for (const n of result[result.length - 2]) {
      if (n.left) result[result.length - 1].push(n.left);
      if (n.right) result[result.length - 1].push(n.right);
    }
  }
  result.reverse();
  result.shift();
  return result.map(row => row.map(e => e.val));
};


const data = deserialize('[3,9,20,null,null,15,7]');
console.log(levelOrderBottom(data));