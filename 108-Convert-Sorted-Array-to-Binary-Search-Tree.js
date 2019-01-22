const { TreeNode , serialize} = require('./tools');
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {

  const traverse = (l, r) => {
    if (l > r) return null;
    let mid = l + Math.floor((r - l) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = traverse(l, mid - 1);
    node.right = traverse(mid + 1, r);
    return node;
  };

  return traverse(0, nums.length - 1);
};

const data = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(serialize(data));
