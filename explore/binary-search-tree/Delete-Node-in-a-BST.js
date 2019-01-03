const { TreeNode, deserialize, serialize } = require('../../tools');

const isLeaf = node => node.left === null && node.right === null;
const getChild = (node, prefer) => {
  const backup = prefer === 'left' ? 'right' : 'left';
  return node[prefer] ? [node[prefer], prefer] : [node[backup], backup];
};

const findTarget = (root, val) => {
  let parent = null, direction = null;
  const traverse = node => {
    if (!node) return;
    if (node.val === val) return node;
    if (node.val < val) {
      parent = node;
      direction = 'right';
      return traverse(node.right);
    }
    if (node.val > val) {
      parent = node;
      direction = 'left';
      return traverse(node.left);
    }
  };
  const target = traverse(root);
  return [target, parent, direction];
};

const findSuccessor = (target) => {
  let parent = null, direction = null;
  if (isLeaf(target)) return target;
  if (target.left) {
    parent = target;
    target = target.left;
    direction = 'left';
    let c, d = getChild(target, 'right');
    while (c) {
      [c, d] = getChild(target, 'right');
      parent = target;
      target = c;
      direction = d;
    }
  } else {
    parent = target;
    target = target.right;
    direction = 'right';
    let c, d = getChild(target, 'right');
    while (c) {
      [c, d] = getChild(target, 'left');
      parent = target;
      target = c;
      direction = d;
    }
  }
  // console.log(target, parent, direction);
  return [target, parent, direction];
};

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  const [target, targetParent, targetDirection] = findTarget(root, key);
  if (!target) return root;
  if (isLeaf(target)) {
    targetParent[targetDirection] = null;
    return root;
  }

  const [successor, successorParent, successorDirection] = findSuccessor(target);
  console.log(successor);
  successor.left = target.left === successor ? null : target.left;
  successor.right = target.right === successor ? null : target.right;
  successorParent[successorDirection] = null;
  if (!targetParent) {
    root.val = successor.val;
    return root;
  }
  targetParent[targetDirection] = successor;
  return root;
};


const data = deserialize('[1,null,2]');
console.log(data);
console.log(deleteNode(data, 1));
console.log(serialize(data));
