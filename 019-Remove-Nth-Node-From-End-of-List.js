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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let follower = head, iterator = head;

  while (iterator) {
    iterator = iterator.next;
    if (n-- < 0) {
      follower = follower.next;
    }
  }

  if (n === 0) return follower.next;
  follower.next = follower.next.next;
  return head;
};


const l = createListOnArr([1, 2]);
console.log(removeNthFromEnd(l, 2));
