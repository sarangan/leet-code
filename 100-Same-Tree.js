/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null) return q === null;
  if (q === null) return p === null;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) && p.val === q.val;
};
