const { BinaryTreeNode, createTreeFronString } = require('../../tools');

var findDuplicateSubtrees = function(root) {
  let obj = {}, res = [];
  preOrder(root, obj, res);
  return res;
};

function preOrder(root, map, res) {
  if (root === null) return '#';
  let str = root.val + preOrder(root.left, map, res) + preOrder(root.right, map, res);
  if (!map[str]) map[str] = 0;
  map[str]++;
  if (map[str] === 2) res.push(root);
  return str;
}


const data = createTreeFronString('[0,0,0,0,null,null,0,null,null,null,0]');

console.log(data);
console.log(findDuplicateSubtrees(data));
