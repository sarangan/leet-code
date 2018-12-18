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


module.exports = {
  ListNode,
  BinaryTreeNode,
  LinkedBinaryTreeNode,
  createListOnArr,
  linkListToArray,
  TreeNode,
  getbtn,
  logger: Logger(),
};
