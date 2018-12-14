const { ListNode, createListOnArr, linkListToArray } = require('./tools');
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const head = new ListNode();
  let tail = head;

  while (l1 || l2) {
    let next;
    if (l1 === null) l1 = new ListNode(Number.MAX_VALUE);
    if (l2 === null) l2 = new ListNode(Number.MAX_VALUE);
    if (l1.val === Number.MAX_VALUE && l2.val === Number.MAX_VALUE) break;

    if (l1.val > l2.val) {
      next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      next = new ListNode(l1.val);
      l1 = l1.next;
    }

    tail.next = next;
    tail = tail.next;
  }

  return head.next;
};


console.log(linkListToArray(mergeTwoLists(
  createListOnArr([1, 2, 4]),
  createListOnArr([1, 2, 3]),
)));

