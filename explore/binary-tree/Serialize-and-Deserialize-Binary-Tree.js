const { TreeNode } = require('../../tools');

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  console.log(root);
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
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = data
    .substring(1, data.length - 1)
    .split(',')
    .filter(e=> e)
    .map(e => e === 'null' ? null : new TreeNode(+e));
  if (arr.length === 0) return null;
  // const n = Math.log(arr.length + 1);
  for (let i = 1; i <= arr.length; i++) {
    if (arr[2 * i - 1]) arr[i - 1].left = arr[2 * i - 1];
    if (arr[2 * i + 1 - 1]) arr[i - 1].right = arr[2 * i + 1 - 1];
  }
  arr[0].left = arr[1];
  arr[0].right = arr[2];
  return arr[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

console.log(serialize(n1));