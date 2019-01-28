const { deserialize } = require('./tools');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  const results = [];
  const stack = [];
  const traverse = node => {
    stack.push(node.val);
    if (!node.left && !node.right) {
      results.push(stack.concat());
      return;
    }

    if (node.left) {
      traverse(node.left);
      stack.pop();
    }
    if (node.right) {
      traverse(node.right);
      stack.pop();
    }
  };

  traverse(root);
  return results.reduce((previousValue, currentValue) => previousValue + +currentValue.join(''), 0);
};

const data = deserialize('[]');
console.log(sumNumbers(data));
