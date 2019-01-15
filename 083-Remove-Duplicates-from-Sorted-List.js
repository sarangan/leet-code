const { ListNode, createListOnArr, linkListToArray } = require('./tools');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let node = head;
  while (node && node.next) {
    while (node.next && node.val === node.next.val) node.next = node.next.next;
    node = node.next;
  }
  return head;
};


console.log(linkListToArray(deleteDuplicates(createListOnArr([1, 1, 2, 3, 3]))));