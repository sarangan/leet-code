function ListNode (val) {
  this.val = val;
  this.next = null;
}

function BinaryTreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

BinaryTreeNode.prototype.toString = function () {
  return `BTN: v:${this.val};l:${this.left};r:${this.right}`;
};

function LinkedBinaryTreeNode (val) {
  this.val = val;
  this.left = this.right = this.next = null;
}

function TreeNode (val) {
  this.val = val;
  this.children = [];
}

function createListOnArr (arr) {
  const head = new ListNode();
  arr
    .map(i => new ListNode(i))
    .reduce((prev, next) => prev.next = next, head);
  return head.next;
}

function Logger (limit = 100) {
  let count = 0;
  return (...args) => {
    if (count > limit) return;
    count++;
    console.log(...args)
  }
}

function linkListToArray (node) {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

function getbtn (val) {
  return new BinaryTreeNode(val);
}

function findHeight (target) {
  let l = 0, r = target / 2;
  while (l + 1 < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (2 ** mid < target && 2 ** (mid + 1) > target) return mid;
    if (2 ** (mid - 1) < target && 2 ** mid > target) return mid - 1;
    if (2 ** (mid + 1) >= target) r = mid;
    if (2 ** (mid - 1) <= target) l = mid;
  }
}


function deserialize (data) {
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
}

function serialize (root) {
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

module.exports = {
  ListNode,
  BinaryTreeNode,
  LinkedBinaryTreeNode,
  createListOnArr,
  linkListToArray,
  TreeNode,
  getbtn,
  deserialize,
  serialize,
  logger: Logger(),
};
