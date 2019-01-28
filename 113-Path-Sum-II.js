const { TreeNode, deserialize } = require('./tools');


var pathSum = function (root, sum) {
  const results = [];
  const stack = [];
  let t = 0;

  const traverse = (node) => {
    if(!node) return null;
    stack.push(node.val);
    t += node.val;

    if (!node.left && !node.right && t === sum) {
      results.push(stack.concat());
    }

    if (node.left) {
      traverse(node.left);
      t -= stack.pop();
    }
    if (node.right) {
      traverse(node.right);
      t -= stack.pop();
    }
  };

  traverse(root);
  return results;
};


const data = deserialize('[5,4,8,11,null,13,4,7,2,null,null,5,1]');
console.log(pathSum(data, 22));