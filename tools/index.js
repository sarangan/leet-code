function ListNode(val) {
  this.val = val;
  this.next = null;
}

function BinaryTreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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

function createTreeFronString(data) {
  const arr = data
    .substring(1, data.length - 1)
    .split(',')
    .filter(e => e)
    .map(e => e === 'null' ? null : new TreeNode(+e));
  if (arr.length === 0) return null;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[2 * i]) arr[i - 1].left = arr[2 * i];
    if (arr[2 * i + 1]) arr[i - 1].right = arr[2 * i + 1];
  }
  arr[0].left = arr[1];
  arr[0].right = arr[2];
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
  createTreeFronString,
  logger: Logger(),
};
