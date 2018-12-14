function ListNode(val) {
  this.val = val;
  this.next = null;
}

function BinaryTreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function createListOnArr(arr) {
  const head = new ListNode();
  arr
    .map(i => new ListNode(i))
    .reduce((prev, next) => prev.next = next, head);
  return head.next;
}

module.exports = {
  ListNode,
  BinaryTreeNode,
  createListOnArr,
};