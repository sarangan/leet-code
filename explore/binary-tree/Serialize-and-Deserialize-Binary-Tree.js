const { TreeNode } = require('../../tools');

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '[]';
  const stack = [root];
  let i = 0;
  while (stack[i] !== undefined) {
    if (!stack[i]) {
      i++;
      continue;
    }
    stack.push(stack[i].left);
    stack.push(stack[i].right);
    i++;
  }
  while (stack[stack.length - 1] === undefined) {
    stack.pop();
  }
  return '[' + stack.map(e => e ? e.val : 'null').toString() + ']';
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data
    .substring(1, data.length - 1)
    .split(',')
    .filter(e => e)
    .map(e => e === 'null' ? null : new TreeNode(+e));

  const head = arr[0];
  let lastGroup = [arr.shift()];
  while (arr.length) {
    const temp = arr.splice(0, lastGroup.length * 2);
    let index = 0;
    for (const n of lastGroup) {
      if (!n) continue;
      n.left = temp[index++] || null;
      n.right = temp[index++] || null;
    }
    lastGroup = temp.filter(n => n);
  }
  return head || null;
};

const t1 = '[1,2,3,null,null,null,9,null,2]';
const t3 = deserialize(t1);
const t2 = serialize(t3);

console.log(t3);
console.log(t1);
console.log(t2);