const { ListNode, createListOnArr, linkListToArray } = require('./tools');
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const head = new ListNode();
  helper(l1, l2, head);
  return head.next;
};

const helper = (l1, l2, head) => {
  if (l1 === null && l2 === null) return;
  if (l1 === null) {
    head.next = l2;
    helper(l1, l2.next, head.next);
    return;
  }
  if (l2 === null) {
    head.next = l1;
    helper(l1.next, l2, head.next);
    return;
  }

  if (l1.val < l2.val) {
    head.next = l1;
    helper(l1.next, l2, head.next);
  } else {
    head.next = l2;
    helper(l1, l2.next, head.next);
  }
};


console.log(linkListToArray(mergeTwoLists(
  createListOnArr([1, 2, 4]),
  createListOnArr([1, 2, 3]),
)));

