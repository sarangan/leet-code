const { ListNode, createListOnArr, linkListToArray } = require('./tools');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};


const data = createListOnArr([1, 2, 3, 4, 5]);
console.log(linkListToArray(reverseList(data)));
