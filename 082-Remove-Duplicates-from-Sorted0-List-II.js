const { ListNode, createListOnArr, linkListToArray } = require('./tools');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let prev = dummyHead, node = dummyHead;
  while (node && node.next) {
    if (node.val === node.next.val) {
      // console.log(node.val, prev.val);
      while (node.next && node.val === node.next.val) {
        node = node.next;
      }
      prev.next = node.next;
    } else {
      prev = node;
    }
    node = node.next;
  }
  return dummyHead.next;
};


console.log(linkListToArray(deleteDuplicates(createListOnArr([1, 1]))));


