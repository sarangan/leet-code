const { ListNode, createListOnArr, linkListToArray } = require('./tools');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = new ListNode(null);
  while (head) {
    const currentNext = head.next;
    if (node.next) {
      head.next = node.next;
      node.next = head;
    } else {
      head.next = null;
      node.next = head;
    }
    head = currentNext;
  }
  return node.next;
};


const data = createListOnArr([1, 2, 3, 4, 5]);
console.log(linkListToArray(reverseList(data)));
