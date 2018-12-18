const { getbtn } = require('../../tools');

const root = getbtn(5);
root.left = getbtn(4);
root.left.left = getbtn(11);
root.left.left.left = getbtn(7);
root.left.left.right = getbtn(2);
root.right = getbtn(8);
root.right.left = getbtn(13);
root.right.right = getbtn(4);
root.right.right.right = getbtn(1);

const isLeaf = node => !node.left && !node.right;

var hasPathSum = function(root, sum) {
  let flag = false;

  const traverse = (node, val) => {
    if (!node) return null;
    if (isLeaf(node)) {
      if ((val + node.val) === sum) flag = true;
    }
    traverse(node.left, val + node.val);
    traverse(node.right, val + node.val);
  };

  traverse(root, 0);
  return flag;
};

console.log(hasPathSum(root, 21));