const { TreeNode, createTreeFronString } = require('../../tools');

var serialize = function(root) {
  if (!root) return '[]';
  const stack = [root];
  let i = 0;
  while (stack[i] !== undefined) {
    if (stack[i] === null) {
      stack.push(null);
      i++;
      continue;
    }
    stack.push(stack[i].left);
    stack.push(stack[i].right);
    i++;
  }
  return '[' + stack.map(e => e ? e.val : 'null').toString() + ']';
};

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  if(!root) return [];
  const obj = {};

  const traverse = node => {
    if(!node) return;
    const key = serialize(node);
    if (obj[key] === undefined) obj[key] = [];
    obj[key].push(node);

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(root);

  const results = [];
  for (const s of Object.keys(obj)) {
    if (obj[s].length > 1) {
      results.push(obj[s][0]);
    }
  }
  return results;
};

const data = createTreeFronString('[1,2,3,4,null,2,4,null,null,4]');
// console.log(data);
console.log(findDuplicateSubtrees(data));