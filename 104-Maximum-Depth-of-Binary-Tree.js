var maxDepth = function(root) {
  if (!root) return 0;
  let maxDepth = 1;

  const recursive = (node, depth) => {
    maxDepth = Math.max(maxDepth, depth);
    if (node.left) recursive(node.left, depth + 1);
    if (node.right) recursive(node.right, depth + 1);
  };
  recursive(root, 1);

  return maxDepth;
};