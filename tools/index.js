function ListNode(val) {
  this.val = val;
  this.next = null;
}

function BinaryTreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

BinaryTreeNode.prototype.toString = function() {
  return `BTN: v:${this.val};l:${this.left};r:${this.right}`;
};

function LinkedBinaryTreeNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}

function TreeNode(val) {
  this.val = val;
  this.children = [];
}

function createListOnArr(arr) {
  const head = new ListNode();
  arr
    .map(i => new ListNode(i))
    .reduce((prev, next) => prev.next = next, head);
  return head.next;
}

function Logger(limit = 100) {
  let count = 0;
  return (...args) => {
    if (count > limit) return;
    count++;
    console.log(...args)
  }
}

function linkListToArray(node) {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

function getbtn(val) {
  return new BinaryTreeNode(val);
}

function findHeight(target) {
  let l = 0, r = target / 2;
  while (l + 1 < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (2 ** mid < target && 2 ** (mid + 1) > target) return mid;
    if (2 ** (mid - 1) < target && 2 ** mid > target) return mid - 1;
    if (2 ** (mid + 1) >= target) r = mid;
    if (2 ** (mid - 1) <= target) l = mid;
  }
}


function createTreeFromString(data) {
  const arr = data
    .substring(1, data.length - 1)
    .split(',')
    .filter(e => e)
    .map(e => e === 'null' ? null : new BinaryTreeNode(+e));
  if (arr.length === 0) return null;

  //find height with binary search
  const height = findHeight(arr.length);
  for (let i = 1; i < 2 ** (height - 1); i++) {
    if (arr[2 * i]) arr[i - 1].left = arr[2 * i];
    if (arr[2 * i + 1]) arr[i - 1].right = arr[2 * i + 1];
  }
  const sub = arr.slice(2 ** height - 1, arr.length);
  for (let i = 2 ** (height - 1) - 1; i < 2 ** height - 1; i++) {
    if (arr[i - 1] !== null) {
      arr[i - 1].left = sub.shift();
      arr[i - 1].right = sub.shift();
      //console.log(arr[i - 1]);
    }
  }
  return arr[0];
}


module.exports = {
  ListNode,
  BinaryTreeNode,
  LinkedBinaryTreeNode,
  createListOnArr,
  linkListToArray,
  TreeNode,
  getbtn,
  createTreeFronString: createTreeFromString,
  logger: Logger(),
};
