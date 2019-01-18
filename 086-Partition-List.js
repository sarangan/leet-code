const { ListNode, createListOnArr, linkListToArray } = require('./tools');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let h1 = new ListNode();
  let h2 = new ListNode();
  let sh1 = h1;
  let sh2 = h2;

  while (head) {
    if (head.val < x) {
      h1.next = head;
      h1 = h1.next;
    } else {
      h2.next = head;
      h2 = h2.next;
    }
    head = head.next;
    console.log(head);
  }
  h1.next = sh2.next;
  h2.next = null;
  return sh1.next;
};

console.log(createListOnArr([1]));

console.log(linkListToArray(partition(createListOnArr([1, 4, 3, 2, 5, 2]), 3)));
