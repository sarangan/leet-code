const { deserialize } = require('./tools');

var minDepth = function (root) {
  if(!root) return 0;
  let minDepth = Number.MAX_VALUE;

  const traverse = (node, depth) => {
    if (!node) return;
    if (!node.left && !node.right) {
      minDepth = Math.min(minDepth, depth);
    }

    if (node.left) traverse(node.left, depth + 1);
    if (node.right) traverse(node.right, depth + 1);

  };

  traverse(root, 1);
  return minDepth;
};


const data = deserialize('[3,9,20,null,null,15,7]');
console.log(minDepth(data));