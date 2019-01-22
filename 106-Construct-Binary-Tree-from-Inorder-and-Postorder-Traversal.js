/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

  // pop postorder as parent
  // find inorder and split in two parts
  // recursively call build of left and right

  const build = (inorder, postorder) => {
    if (inorder.length === 0 && postorder.length === 0) return null;
    const last = postorder.pop();
    const parent = new TreeNode(last);
    const inorderpivot = inorder.indexOf(last);

    parent.left = build(inorder.slice(0, inorderpivot), postorder.slice(0, inorderpivot));
    parent.right = build(inorder.slice(inorderpivot + 1, inorder.length), postorder.slice(inorderpivot, postorder.length));
    return parent;
  };

  return build(inorder, postorder);
};