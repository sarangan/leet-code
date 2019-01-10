const { ListNode, linkListToArray } = require('./tools');
// Given a linked list, rotate the list to the right by k places, where k is non-negative.
//
//   Example 1:
//
// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
//   rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const lengthOfList = (head) => {
  const arr = [];
  let node = head;
  while (node.next) {
    arr.push(node.val);
    node = node.next;
  }
  arr.push(node.val);
  return arr;
};

function createListOnArr (arr) {
  const head = new ListNode();
  arr
    .map(i => new ListNode(i))
    .reduce((prev, next) => prev.next = next, head);
  return head.next;
}


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) return head;
  let arr = lengthOfList(head);
  if (arr.length === 0 ) return head;
  k = k % arr.length;
  arr = arr.slice(arr.length - k, arr.length).concat(arr.slice(0, arr.length - k));
  return createListOnArr(arr);
};


console.log(linkListToArray(rotateRight(createListOnArr([1, 2 ,3, 4, 5]), 2)));