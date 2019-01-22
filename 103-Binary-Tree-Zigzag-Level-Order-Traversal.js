const { BinaryTreeNode, deserialize } = require('./tools');

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [[root]];

  let flag = true;
  while (result[result.length - 1].length > 0) {
    result.push([]);
    for (let i = result[result.length - 2].length - 1; i >= 0; i--) {
      const n = result[result.length - 2][i];
      if (flag) {
        if (n.right) result[result.length - 1].push(n.right);
        if (n.left) result[result.length - 1].push(n.left);
      } else {
        if (n.left) result[result.length - 1].push(n.left);
        if (n.right) result[result.length - 1].push(n.right);
      }
    }
    flag = !flag;
  }
  result.pop();
  return result.map(row => row.map(c => c.val));
};

const data = deserialize('[3,9,20,null,null,15,7]');
console.log(data);
console.log(zigzagLevelOrder(data));