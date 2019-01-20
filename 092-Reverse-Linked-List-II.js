const { ListNode, createListOnArr, linkListToArray } = require('./tools');
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (m === n) return head;
  let len = 0, dummyHead = new ListNode();
  dummyHead.next = head;
  let node = dummyHead;
  const result = [];

  while (node) {
    if (len >= m - 1 && len <= n + 1)
      result.push(node);
    node = node.next;
    len++;
  }

  const isLast = n === len - 1;
  if (isLast) result.push(new ListNode());

  for (let i = result.length - 2; i > 1; i--) {
    result[i].next = result[i - 1];
  }
  result[0].next = result[result.length - 2];
  result[1].next = isLast ? null : result[result.length - 1];

  return dummyHead.next;
};


const data = createListOnArr([1, 2]);
const result = reverseBetween(data, 1, 2);
console.log(linkListToArray(result));



